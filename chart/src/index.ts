import { PartialRecursive, scope } from '@package/common'
import { App } from 'cdk8s'
import { dnsChart, ingressNginxChart, metallbChart } from './charts'
import {
  ExternalDnsHelmParam,
  IngressNginxHelmParam,
  externalDnsDefaultValues,
  ingressNginxDefaultValues
} from './helm-values'

const synth = () => {
  const app: App = new App()

  /* -------------------------------------------------------------------------- */
  /*                             Add chart: metallb                             */
  /* -------------------------------------------------------------------------- */

  const metalLb = metallbChart('metallb', {
    chartProps: { namespace: 'metallb-system' },
    helmProps: {
      releaseName: 'l2-lb'
    },
    ipAddressPool: {
      name: 'local-ip',
      addresses: [process.env.LB_IP_ADDRESS_POOL as string]
    }
  }).load(app)

  /* -------------------------------------------------------------------------- */
  /*                          Add chart: ingress-nginx                          */
  /* -------------------------------------------------------------------------- */
  const dnsNamespace = 'dns'
  const ingressNginxValues = scope<PartialRecursive<IngressNginxHelmParam>>(ingressNginxDefaultValues).merge({
    controller: {
      service: {
        type: 'LoadBalancer'
      }
    },
    tcp: {
      '53': `${dnsNamespace}/core-dns-coredns:53`
    },
    udp: {
      '53': `${dnsNamespace}/core-dns-coredns:53`
    }
  })
  const ingressNginx = ingressNginxChart('ingress-nginx', {
    chartProps: {
      namespace: 'ingress-nginx'
    },
    helmProps: {
      releaseName: 'default',
      values: ingressNginxValues.get()
    }
  }).load(app)
  ingressNginx.addDependency(metalLb)

  const etcdClusterName = 'etcd'
  const etcdClusterPort = 2379
  const etcdUrl = `http://${etcdClusterName}:${etcdClusterPort}`

  const dns = dnsChart('dns', {
    chartProps: {
      namespace: dnsNamespace
    },
    coreDns: {
      releaseName: 'core-dns',
      values: {
        isClusterService: false,
        rbac: {
          create: true
        },
        readinessProbe: {
          enabled: false
        },
        servers: [
          {
            zones: [
              {
                zone: '.'
              }
            ],
            port: 53,
            plugins: [
              {
                name: 'errors'
              },
              {
                name: 'health',
                configBlock: 'lameduck 5s'
              },
              {
                name: 'log'
              },
              {
                name: 'etcd',
                configBlock: ['path /skydns', `endpoint ${etcdUrl}`, 'fallthrough'].join('\n')
              },
              {
                name: 'cache',
                parameters: 30
              },
              {
                name: 'prometheus',
                parameters: '0.0.0.0:9153'
              },
              {
                name: 'reload'
              },
              {
                name: 'loadbalance'
              }
            ]
          }
        ]
      }
    },
    etcd: {
      name: etcdClusterName,
      replicas: 3,
      labels: {
        'app.kubernetes.io/name': etcdClusterName,
        'app.kubernetes.io/component': 'app'
      }
    },
    externalDns: {
      releaseName: 'external-dns',
      values: scope<PartialRecursive<ExternalDnsHelmParam>>(externalDnsDefaultValues)
        .merge({
          env: [
            {
              name: 'ETCD_URLS',
              value: etcdUrl
            }
          ],
          logLevel: 'info',
          provider: 'coredns'
        })
        .get()
    }
  }).load(app)

  dns.addDependency(ingressNginx)
  app.synth()
}

synth()
