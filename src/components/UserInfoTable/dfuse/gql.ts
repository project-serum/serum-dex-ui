export const streamSerumInstructionSubGraphql = `
subscription($account: String!){
  serumInstructionHistory(account: $account){
    instruction {
      __typename
      ...on  SerumNewOrder {
        side
        limitPrice
        maxQuantity
        orderType
        clientID
        accounts {
          market {
            ...AccountFragment
          }
          openOrders {
            ...AccountFragment
          }
          requestQueue {
            ...AccountFragment
          }
          payer {
            ...AccountFragment
          }
          owner {
            ...AccountFragment
          }
          coinVault {
            ...AccountFragment
          }
          pcVault {
            ...AccountFragment
          }
          splTokenProgram {
            ...AccountFragment
          }
          rent {
            ...AccountFragment
          }
          srmDiscount {
            ...AccountFragment
          }           
        }
      }
      ...on SerumMatchOrder{
        limit
        accounts {
          market {
            ...AccountFragment
          }
          requestQueue {
            ...AccountFragment
          }
          eventQueue {
            ...AccountFragment
          }
          bids {
            ...AccountFragment
          }
          asks {
            ...AccountFragment
          }
          coinFeeReceivable {
            ...AccountFragment
          }
          pcFeeReceivable {
            ...AccountFragment
          }
        }
      }
      ...on SerumCancelOrder{
        side
        orderId
        openOrders
        openOrderSlot
        accounts{
          market {
            ...AccountFragment
          }
          requestQueue {
            ...AccountFragment
          }
          owner {
            ...AccountFragment
          }
        }
      }
      ...on SerumSettleFunds {
        __typename
        accounts{
          market {
            ...AccountFragment
          }
          openOrders {
            ...AccountFragment
          }
          owner {
            ...AccountFragment
          }
          coinVault {
            ...AccountFragment
          }
          pcVault {
            ...AccountFragment
          }
          pcWallet {
            ...AccountFragment
          }
          signer {
            ...AccountFragment
          }
          splTokenProgram {
            ...AccountFragment
          }                    
        }
      }
      ...on SerumCancelOrderByClientId{
        clientID
        accounts{
          market {
            ...AccountFragment
          }
          openOrders {
            ...AccountFragment
          }
          requestQueue {
            ...AccountFragment
          }
          owner {
            ...AccountFragment
          }
        }
      }
    }
  }
}
fragment AccountFragment on Account {
  publicKey
  isSigner
  isWritable
}`

