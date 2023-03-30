# How to: send backrun bundles to mevblocker RPC

_n.b. that historical submitted bundles, including those that did not land on-chain, will not only be shared with builders but also archived and presented to the public for transparency_

1. Connect to websocket server located at `searchers.mevblocker.io`

```
websocat searchers.mevblocker.io
```

2. Use `eth_subscribe` method to subscribe to unsigned pending transactions - `mevblocker_partialPendingTransactions`:

```
{"method":"eth_subscribe","params": ["mevblocker_partialPendingTransactions"]}
```

Response:

```
{"jsonrpc": "2.0", "id": 1, "result": "0xd58bbbc0f5190962eff01b6f0ec17724"}
```

3. You'll start receiving unsigned pending transactions (missing `v`, `r`, and `s`):

```
{"jsonrpc": "2.0", "method": "eth_subscription", "params": {"subscription": "0xd58bbbc0f5190962eff01b6f0ec17724", "result": {"chainId": 1, "to": "0xe33062a24149f7801a48b2675ed5111d3278f0f5", "value": "0x0", "data": "0x", "nonce": "0x1006", "maxPriorityFeePerGas": "0x10c8f83", "maxFeePerGas": "0x1307bf2380", "gas": "0x5208", "type": 2, "hash": "0x272ef23fc2c1ae118a1d0ba7203fa0ec8663e4991cc96a1338d4534383dffcdc", "from": "0xe33062a24149f7801a48b2675ed5111d3278f0f5"}}}
```

4. Construct a back-run bundle like you would normally for a target transaction from the mempool, but where the first element of the `txs` array in `params` of `eth_sendBundle` should be the hash of the pending target, instead of the full encoded transaction.

_n.b. that the pending target transaction must be the first transaction in `txs`, and only one target transaction can be included per bundle, otherwise the request will be rejected. It is still possible to submit multiple bundles for the same block, containing different target transactions.__

5. Send back-run bundle to the same websocket connection using `eth_sendBundle` method.

_n.b. that `replacementUuid` is supported in this version of `eth_sendBundle`._

_n.b. that `revertingTxHashes` is also supported, however the target tx may not be contained in `revertingTxHashes`._

```
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "eth_sendBundle",
  "params": [
    {
      "txs": [
        // this is the 32-byte transaction hash of the target transaction
        "0xfec1700ef24c9ff6fd2e07584a16bbb2fec1700ef24c9ff6fd2e07584a16bbb2",
        // this is your signed encoded transaction
        "0xabc123.."
      ],
      "blockNumber": "0xb63dcd",
      "minTimestamp": 0,
      "maxTimestamp": 1615920932
    }
  ]
}
```
