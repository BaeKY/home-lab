// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 * BFDProfile represents the settings of the bfd session that can be optionally associated with a BGP session.
 *
 * @schema BFDProfile
 */
export class BfdProfile extends ApiObject {
  /**
   * Returns the apiVersion and kind for "BFDProfile"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'metallb.io/v1beta1',
    kind: 'BFDProfile',
  }

  /**
   * Renders a Kubernetes manifest for "BFDProfile".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: BfdProfileProps = {}): any {
    return {
      ...BfdProfile.GVK,
      ...toJson_BfdProfileProps(props),
    };
  }

  /**
   * Defines a "BFDProfile" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: BfdProfileProps = {}) {
    super(scope, id, {
      ...BfdProfile.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...BfdProfile.GVK,
      ...toJson_BfdProfileProps(resolved),
    };
  }
}

/**
 * BFDProfile represents the settings of the bfd session that can be optionally associated with a BGP session.
 *
 * @schema BFDProfile
 */
export interface BfdProfileProps {
  /**
   * @schema BFDProfile#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * BFDProfileSpec defines the desired state of BFDProfile.
   *
   * @schema BFDProfile#spec
   */
  readonly spec?: BfdProfileSpec;

}

/**
 * Converts an object of type 'BfdProfileProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BfdProfileProps(obj: BfdProfileProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_BfdProfileSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * BFDProfileSpec defines the desired state of BFDProfile.
 *
 * @schema BfdProfileSpec
 */
export interface BfdProfileSpec {
  /**
   * Configures the detection multiplier to determine packet loss. The remote transmission interval will be multiplied by this value to determine the connection loss detection timer.
   *
   * @schema BfdProfileSpec#detectMultiplier
   */
  readonly detectMultiplier?: number;

  /**
   * Configures the minimal echo receive transmission interval that this system is capable of handling in milliseconds. Defaults to 50ms
   *
   * @default 50ms
   * @schema BfdProfileSpec#echoInterval
   */
  readonly echoInterval?: number;

  /**
   * Enables or disables the echo transmission mode. This mode is disabled by default, and not supported on multi hops setups.
   *
   * @schema BfdProfileSpec#echoMode
   */
  readonly echoMode?: boolean;

  /**
   * For multi hop sessions only: configure the minimum expected TTL for an incoming BFD control packet.
   *
   * @schema BfdProfileSpec#minimumTtl
   */
  readonly minimumTtl?: number;

  /**
   * Mark session as passive: a passive session will not attempt to start the connection and will wait for control packets from peer before it begins replying.
   *
   * @schema BfdProfileSpec#passiveMode
   */
  readonly passiveMode?: boolean;

  /**
   * The minimum interval that this system is capable of receiving control packets in milliseconds. Defaults to 300ms.
   *
   * @default 300ms.
   * @schema BfdProfileSpec#receiveInterval
   */
  readonly receiveInterval?: number;

  /**
   * The minimum transmission interval (less jitter) that this system wants to use to send BFD control packets in milliseconds. Defaults to 300ms
   *
   * @default 300ms
   * @schema BfdProfileSpec#transmitInterval
   */
  readonly transmitInterval?: number;

}

/**
 * Converts an object of type 'BfdProfileSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BfdProfileSpec(obj: BfdProfileSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detectMultiplier': obj.detectMultiplier,
    'echoInterval': obj.echoInterval,
    'echoMode': obj.echoMode,
    'minimumTtl': obj.minimumTtl,
    'passiveMode': obj.passiveMode,
    'receiveInterval': obj.receiveInterval,
    'transmitInterval': obj.transmitInterval,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

