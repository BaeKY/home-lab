// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 * BGPAdvertisement allows to advertise the IPs coming from the selected IPAddressPools via BGP, setting the parameters of the BGP Advertisement.
 *
 * @schema BGPAdvertisement
 */
export class BgpAdvertisement extends ApiObject {
  /**
   * Returns the apiVersion and kind for "BGPAdvertisement"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'metallb.io/v1beta1',
    kind: 'BGPAdvertisement',
  }

  /**
   * Renders a Kubernetes manifest for "BGPAdvertisement".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: BgpAdvertisementProps = {}): any {
    return {
      ...BgpAdvertisement.GVK,
      ...toJson_BgpAdvertisementProps(props),
    };
  }

  /**
   * Defines a "BGPAdvertisement" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: BgpAdvertisementProps = {}) {
    super(scope, id, {
      ...BgpAdvertisement.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...BgpAdvertisement.GVK,
      ...toJson_BgpAdvertisementProps(resolved),
    };
  }
}

/**
 * BGPAdvertisement allows to advertise the IPs coming from the selected IPAddressPools via BGP, setting the parameters of the BGP Advertisement.
 *
 * @schema BGPAdvertisement
 */
export interface BgpAdvertisementProps {
  /**
   * @schema BGPAdvertisement#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * BGPAdvertisementSpec defines the desired state of BGPAdvertisement.
   *
   * @schema BGPAdvertisement#spec
   */
  readonly spec?: BgpAdvertisementSpec;

}

/**
 * Converts an object of type 'BgpAdvertisementProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BgpAdvertisementProps(obj: BgpAdvertisementProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_BgpAdvertisementSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * BGPAdvertisementSpec defines the desired state of BGPAdvertisement.
 *
 * @schema BgpAdvertisementSpec
 */
export interface BgpAdvertisementSpec {
  /**
   * The aggregation-length advertisement option lets you “roll up” the /32s into a larger prefix. Defaults to 32. Works for IPv4 addresses.
   *
   * @default 32. Works for IPv4 addresses.
   * @schema BgpAdvertisementSpec#aggregationLength
   */
  readonly aggregationLength?: number;

  /**
   * The aggregation-length advertisement option lets you “roll up” the /128s into a larger prefix. Defaults to 128. Works for IPv6 addresses.
   *
   * @default 128. Works for IPv6 addresses.
   * @schema BgpAdvertisementSpec#aggregationLengthV6
   */
  readonly aggregationLengthV6?: number;

  /**
   * The BGP communities to be associated with the announcement. Each item can be a community of the form 1234:1234 or the name of an alias defined in the Community CRD.
   *
   * @schema BgpAdvertisementSpec#communities
   */
  readonly communities?: string[];

  /**
   * A selector for the IPAddressPools which would get advertised via this advertisement. If no IPAddressPool is selected by this or by the list, the advertisement is applied to all the IPAddressPools.
   *
   * @schema BgpAdvertisementSpec#ipAddressPoolSelectors
   */
  readonly ipAddressPoolSelectors?: BgpAdvertisementSpecIpAddressPoolSelectors[];

  /**
   * The list of IPAddressPools to advertise via this advertisement, selected by name.
   *
   * @schema BgpAdvertisementSpec#ipAddressPools
   */
  readonly ipAddressPools?: string[];

  /**
   * The BGP LOCAL_PREF attribute which is used by BGP best path algorithm, Path with higher localpref is preferred over one with lower localpref.
   *
   * @schema BgpAdvertisementSpec#localPref
   */
  readonly localPref?: number;

  /**
   * NodeSelectors allows to limit the nodes to announce as next hops for the LoadBalancer IP. When empty, all the nodes having  are announced as next hops.
   *
   * @schema BgpAdvertisementSpec#nodeSelectors
   */
  readonly nodeSelectors?: BgpAdvertisementSpecNodeSelectors[];

  /**
   * Peers limits the bgppeer to advertise the ips of the selected pools to. When empty, the loadbalancer IP is announced to all the BGPPeers configured.
   *
   * @schema BgpAdvertisementSpec#peers
   */
  readonly peers?: string[];

}

/**
 * Converts an object of type 'BgpAdvertisementSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BgpAdvertisementSpec(obj: BgpAdvertisementSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'aggregationLength': obj.aggregationLength,
    'aggregationLengthV6': obj.aggregationLengthV6,
    'communities': obj.communities?.map(y => y),
    'ipAddressPoolSelectors': obj.ipAddressPoolSelectors?.map(y => toJson_BgpAdvertisementSpecIpAddressPoolSelectors(y)),
    'ipAddressPools': obj.ipAddressPools?.map(y => y),
    'localPref': obj.localPref,
    'nodeSelectors': obj.nodeSelectors?.map(y => toJson_BgpAdvertisementSpecNodeSelectors(y)),
    'peers': obj.peers?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
 *
 * @schema BgpAdvertisementSpecIpAddressPoolSelectors
 */
export interface BgpAdvertisementSpecIpAddressPoolSelectors {
  /**
   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
   *
   * @schema BgpAdvertisementSpecIpAddressPoolSelectors#matchExpressions
   */
  readonly matchExpressions?: BgpAdvertisementSpecIpAddressPoolSelectorsMatchExpressions[];

  /**
   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
   *
   * @schema BgpAdvertisementSpecIpAddressPoolSelectors#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

/**
 * Converts an object of type 'BgpAdvertisementSpecIpAddressPoolSelectors' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BgpAdvertisementSpecIpAddressPoolSelectors(obj: BgpAdvertisementSpecIpAddressPoolSelectors | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'matchExpressions': obj.matchExpressions?.map(y => toJson_BgpAdvertisementSpecIpAddressPoolSelectorsMatchExpressions(y)),
    'matchLabels': ((obj.matchLabels) === undefined) ? undefined : (Object.entries(obj.matchLabels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
 *
 * @schema BgpAdvertisementSpecNodeSelectors
 */
export interface BgpAdvertisementSpecNodeSelectors {
  /**
   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
   *
   * @schema BgpAdvertisementSpecNodeSelectors#matchExpressions
   */
  readonly matchExpressions?: BgpAdvertisementSpecNodeSelectorsMatchExpressions[];

  /**
   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
   *
   * @schema BgpAdvertisementSpecNodeSelectors#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

/**
 * Converts an object of type 'BgpAdvertisementSpecNodeSelectors' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BgpAdvertisementSpecNodeSelectors(obj: BgpAdvertisementSpecNodeSelectors | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'matchExpressions': obj.matchExpressions?.map(y => toJson_BgpAdvertisementSpecNodeSelectorsMatchExpressions(y)),
    'matchLabels': ((obj.matchLabels) === undefined) ? undefined : (Object.entries(obj.matchLabels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 *
 * @schema BgpAdvertisementSpecIpAddressPoolSelectorsMatchExpressions
 */
export interface BgpAdvertisementSpecIpAddressPoolSelectorsMatchExpressions {
  /**
   * key is the label key that the selector applies to.
   *
   * @schema BgpAdvertisementSpecIpAddressPoolSelectorsMatchExpressions#key
   */
  readonly key: string;

  /**
   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
   *
   * @schema BgpAdvertisementSpecIpAddressPoolSelectorsMatchExpressions#operator
   */
  readonly operator: string;

  /**
   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
   *
   * @schema BgpAdvertisementSpecIpAddressPoolSelectorsMatchExpressions#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'BgpAdvertisementSpecIpAddressPoolSelectorsMatchExpressions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BgpAdvertisementSpecIpAddressPoolSelectorsMatchExpressions(obj: BgpAdvertisementSpecIpAddressPoolSelectorsMatchExpressions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'operator': obj.operator,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 *
 * @schema BgpAdvertisementSpecNodeSelectorsMatchExpressions
 */
export interface BgpAdvertisementSpecNodeSelectorsMatchExpressions {
  /**
   * key is the label key that the selector applies to.
   *
   * @schema BgpAdvertisementSpecNodeSelectorsMatchExpressions#key
   */
  readonly key: string;

  /**
   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
   *
   * @schema BgpAdvertisementSpecNodeSelectorsMatchExpressions#operator
   */
  readonly operator: string;

  /**
   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
   *
   * @schema BgpAdvertisementSpecNodeSelectorsMatchExpressions#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'BgpAdvertisementSpecNodeSelectorsMatchExpressions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BgpAdvertisementSpecNodeSelectorsMatchExpressions(obj: BgpAdvertisementSpecNodeSelectorsMatchExpressions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'operator': obj.operator,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

