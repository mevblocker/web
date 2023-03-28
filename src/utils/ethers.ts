import { providers } from 'ethers'

/**
 * Checks whether the specified provider is a JSON RPC provider.
 */
export function isJsonRpcProvider(
  provider: providers.Provider,
): provider is providers.JsonRpcProvider {
  return "send" in provider;
}