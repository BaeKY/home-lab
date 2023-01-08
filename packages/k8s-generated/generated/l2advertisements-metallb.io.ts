// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 * L2Advertisement allows to advertise the LoadBalancer IPs provided by the selected pools via L2.
 *
 * @schema L2Advertisement
 */
export class L2Advertisement extends ApiObject {
  /**
   * Returns the apiVersion and kind for "L2Advertisement"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'metallb.io/v1beta1',
    kind: 'L2Advertisement',
  }

  /**
   * Renders a Kubernetes manifest for "L2Advertisement".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: L2AdvertisementProps = {}): any {
    return {
      ...L2Advertisement.GVK,
      ...toJson_L2AdvertisementProps(props),
    };
  }

  /**
   * Defines a "L2Advertisement" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: L2AdvertisementProps = {}) {
    super(scope, id, {
      ...L2Advertisement.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...L2Advertisement.GVK,
      ...toJson_L2AdvertisementProps(resolved),
    };
  }
}

/**
 * L2Advertisement allows to advertise the LoadBalancer IPs provided by the selected pools via L2.
 *
 * @schema L2Advertisement
 */
export interface L2AdvertisementProps {
  /**
   * @schema L2Advertisement#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * L2AdvertisementSpec defines the desired state of L2Advertisement.
   *
   * @schema L2Advertisement#spec
   */
  readonly spec?: L2AdvertisementSpec;

}

/**
 * Converts an object of type 'L2AdvertisementProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_L2AdvertisementProps(obj: L2AdvertisementProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_L2AdvertisementSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * L2AdvertisementSpec defines the desired state of L2Advertisement.
 *
 * @schema L2AdvertisementSpec
 */
export interface L2AdvertisementSpec {
  /**
   * A list of interfaces to announce from. The LB IP will be announced only from these interfaces. If the field is not set, we advertise from all the interfaces on the host.
   *
   * @schema L2AdvertisementSpec#interfaces
   */
  readonly interfaces?: string[];

  /**
   * A selector for the IPAddressPools which would get advertised via this advertisement. If no IPAddressPool is selected by this or by the list, the advertisement is applied to all the IPAddressPools.
   *
   * @schema L2AdvertisementSpec#ipAddressPoolSelectors
   */
  readonly ipAddressPoolSelectors?: L2AdvertisementSpecIpAddressPoolSelectors[];

  /**
   * The list of IPAddressPools to advertise via this advertisement, selected by name.
   *
   * @schema L2AdvertisementSpec#ipAddressPools
   */
  readonly ipAddressPools?: string[];

  /**
   * NodeSelectors allows to limit the nodes to announce as next hops for the LoadBalancer IP. When empty, all the nodes having  are announced as next hops.
   *
   * @schema L2AdvertisementSpec#nodeSelectors
   */
  readonly nodeSelectors?: L2AdvertisementSpecNodeSelectors[];

}

/**
 * Converts an object of type 'L2AdvertisementSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_L2AdvertisementSpec(obj: L2AdvertisementSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'interfaces': obj.interfaces?.map(y => y),
    'ipAddressPoolSelectors': obj.ipAddressPoolSelectors?.map(y => toJson_L2AdvertisementSpecIpAddressPoolSelectors(y)),
    'ipAddressPools': obj.ipAddressPools?.map(y => y),
    'nodeSelectors': obj.nodeSelectors?.map(y => toJson_L2AdvertisementSpecNodeSelectors(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
 *
 * @schema L2AdvertisementSpecIpAddressPoolSelectors
 */
export interface L2AdvertisementSpecIpAddressPoolSelectors {
  /**
   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
   *
   * @schema L2AdvertisementSpecIpAddressPoolSelectors#matchExpressions
   */
  readonly matchExpressions?: L2AdvertisementSpecIpAddressPoolSelectorsMatchExpressions[];

  /**
   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
   *
   * @schema L2AdvertisementSpecIpAddressPoolSelectors#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

/**
 * Converts an object of type 'L2AdvertisementSpecIpAddressPoolSelectors' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_L2AdvertisementSpecIpAddressPoolSelectors(obj: L2AdvertisementSpecIpAddressPoolSelectors | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'matchExpressions': obj.matchExpressions?.map(y => toJson_L2AdvertisementSpecIpAddressPoolSelectorsMatchExpressions(y)),
    'matchLabels': ((obj.matchLabels) === undefined) ? undefined : (Object.entries(obj.matchLabels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
 *
 * @schema L2AdvertisementSpecNodeSelectors
 */
export interface L2AdvertisementSpecNodeSelectors {
  /**
   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
   *
   * @schema L2AdvertisementSpecNodeSelectors#matchExpressions
   */
  readonly matchExpressions?: L2AdvertisementSpecNodeSelectorsMatchExpressions[];

  /**
   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
   *
   * @schema L2AdvertisementSpecNodeSelectors#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

/**
 * Converts an object of type 'L2AdvertisementSpecNodeSelectors' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_L2AdvertisementSpecNodeSelectors(obj: L2AdvertisementSpecNodeSelectors | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'matchExpressions': obj.matchExpressions?.map(y => toJson_L2AdvertisementSpecNodeSelectorsMatchExpressions(y)),
    'matchLabels': ((obj.matchLabels) === undefined) ? undefined : (Object.entries(obj.matchLabels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 *
 * @schema L2AdvertisementSpecIpAddressPoolSelectorsMatchExpressions
 */
export interface L2AdvertisementSpecIpAddressPoolSelectorsMatchExpressions {
  /**
   * key is the label key that the selector applies to.
   *
   * @schema L2AdvertisementSpecIpAddressPoolSelectorsMatchExpressions#key
   */
  readonly key: string;

  /**
   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
   *
   * @schema L2AdvertisementSpecIpAddressPoolSelectorsMatchExpressions#operator
   */
  readonly operator: string;

  /**
   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
   *
   * @schema L2AdvertisementSpecIpAddressPoolSelectorsMatchExpressions#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'L2AdvertisementSpecIpAddressPoolSelectorsMatchExpressions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_L2AdvertisementSpecIpAddressPoolSelectorsMatchExpressions(obj: L2AdvertisementSpecIpAddressPoolSelectorsMatchExpressions | undefined): Record<string, any> | undefined {
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
 * @schema L2AdvertisementSpecNodeSelectorsMatchExpressions
 */
export interface L2AdvertisementSpecNodeSelectorsMatchExpressions {
  /**
   * key is the label key that the selector applies to.
   *
   * @schema L2AdvertisementSpecNodeSelectorsMatchExpressions#key
   */
  readonly key: string;

  /**
   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
   *
   * @schema L2AdvertisementSpecNodeSelectorsMatchExpressions#operator
   */
  readonly operator: string;

  /**
   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
   *
   * @schema L2AdvertisementSpecNodeSelectorsMatchExpressions#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'L2AdvertisementSpecNodeSelectorsMatchExpressions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_L2AdvertisementSpecNodeSelectorsMatchExpressions(obj: L2AdvertisementSpecNodeSelectorsMatchExpressions | undefined): Record<string, any> | undefined {
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
