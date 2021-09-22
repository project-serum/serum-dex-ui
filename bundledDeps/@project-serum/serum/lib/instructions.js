'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.DexInstructions = exports.decodeInstruction = exports.encodeInstruction = exports.INSTRUCTION_LAYOUT = exports.NEW_ORDER_V3_OWNER_INDEX = exports.NEW_ORDER_V3_OPEN_ORDERS_INDEX = exports.NEW_ORDER_OWNER_INDEX = exports.NEW_ORDER_OPEN_ORDERS_INDEX = exports.SETTLE_FUNDS_QUOTE_WALLET_INDEX = exports.SETTLE_FUNDS_BASE_WALLET_INDEX = void 0;
const buffer_layout_1 = require('buffer-layout');
const layout_1 = require('./layout');
const web3_js_1 = require('@solana/web3.js');
const token_instructions_1 = require('./token-instructions');
// NOTE: Update these if the position of arguments for the settleFunds instruction changes
exports.SETTLE_FUNDS_BASE_WALLET_INDEX = 5;
exports.SETTLE_FUNDS_QUOTE_WALLET_INDEX = 6;
// NOTE: Update these if the position of arguments for the newOrder instruction changes
exports.NEW_ORDER_OPEN_ORDERS_INDEX = 1;
exports.NEW_ORDER_OWNER_INDEX = 4;
// NOTE: Update these if the position of arguments for the newOrder instruction changes
exports.NEW_ORDER_V3_OPEN_ORDERS_INDEX = 1;
exports.NEW_ORDER_V3_OWNER_INDEX = 7;
exports.INSTRUCTION_LAYOUT = new layout_1.VersionedLayout(
  0,
  buffer_layout_1.union(buffer_layout_1.u32('instruction')),
);
exports.INSTRUCTION_LAYOUT.inner.addVariant(
  0,
  buffer_layout_1.struct([
    layout_1.u64('baseLotSize'),
    layout_1.u64('quoteLotSize'),
    buffer_layout_1.u16('feeRateBps'),
    layout_1.u64('vaultSignerNonce'),
    layout_1.u64('quoteDustThreshold'),
  ]),
  'initializeMarket',
);
exports.INSTRUCTION_LAYOUT.inner.addVariant(
  1,
  buffer_layout_1.struct([
    layout_1.sideLayout('side'),
    layout_1.u64('limitPrice'),
    layout_1.u64('maxQuantity'),
    layout_1.orderTypeLayout('orderType'),
    layout_1.u64('clientId'),
  ]),
  'newOrder',
);
exports.INSTRUCTION_LAYOUT.inner.addVariant(
  2,
  buffer_layout_1.struct([buffer_layout_1.u16('limit')]),
  'matchOrders',
);
exports.INSTRUCTION_LAYOUT.inner.addVariant(
  3,
  buffer_layout_1.struct([buffer_layout_1.u16('limit')]),
  'consumeEvents',
);
exports.INSTRUCTION_LAYOUT.inner.addVariant(
  4,
  buffer_layout_1.struct([
    layout_1.sideLayout('side'),
    layout_1.u128('orderId'),
    layout_1.publicKeyLayout('openOrders'),
    buffer_layout_1.u8('openOrdersSlot'),
  ]),
  'cancelOrder',
);
exports.INSTRUCTION_LAYOUT.inner.addVariant(
  5,
  buffer_layout_1.struct([]),
  'settleFunds',
);
exports.INSTRUCTION_LAYOUT.inner.addVariant(
  6,
  buffer_layout_1.struct([layout_1.u64('clientId')]),
  'cancelOrderByClientId',
);
exports.INSTRUCTION_LAYOUT.inner.addVariant(
  10,
  buffer_layout_1.struct([
    layout_1.sideLayout('side'),
    layout_1.u64('limitPrice'),
    layout_1.u64('maxBaseQuantity'),
    layout_1.u64('maxQuoteQuantity'),
    layout_1.selfTradeBehaviorLayout('selfTradeBehavior'),
    layout_1.orderTypeLayout('orderType'),
    layout_1.u64('clientId'),
    buffer_layout_1.u16('limit'),
  ]),
  'newOrderV3',
);
exports.INSTRUCTION_LAYOUT.inner.addVariant(
  11,
  buffer_layout_1.struct([
    layout_1.sideLayout('side'),
    layout_1.u128('orderId'),
  ]),
  'cancelOrderV2',
);
exports.INSTRUCTION_LAYOUT.inner.addVariant(
  12,
  buffer_layout_1.struct([layout_1.u64('clientId')]),
  'cancelOrderByClientIdV2',
);
exports.INSTRUCTION_LAYOUT.inner.addVariant(
  14,
  buffer_layout_1.struct([]),
  'closeOpenOrders',
);
exports.INSTRUCTION_LAYOUT.inner.addVariant(
  15,
  buffer_layout_1.struct([]),
  'initOpenOrders',
);
exports.INSTRUCTION_LAYOUT.inner.addVariant(
  16,
  buffer_layout_1.struct([buffer_layout_1.u16('limit')]),
  'prune',
);
function encodeInstruction(instruction) {
  const b = Buffer.alloc(100);
  return b.slice(0, exports.INSTRUCTION_LAYOUT.encode(instruction, b));
}
exports.encodeInstruction = encodeInstruction;
function decodeInstruction(message) {
  return exports.INSTRUCTION_LAYOUT.decode(message);
}
exports.decodeInstruction = decodeInstruction;
class DexInstructions {
  static initializeMarket({
    market,
    requestQueue,
    eventQueue,
    bids,
    asks,
    baseVault,
    quoteVault,
    baseMint,
    quoteMint,
    baseLotSize,
    quoteLotSize,
    feeRateBps,
    vaultSignerNonce,
    quoteDustThreshold,
    programId,
    authority = undefined,
    pruneAuthority = undefined,
  }) {
    let rentSysvar = new web3_js_1.PublicKey(
      'SysvarRent111111111111111111111111111111111',
    );
    return new web3_js_1.TransactionInstruction({
      keys: [
        { pubkey: market, isSigner: false, isWritable: true },
        { pubkey: requestQueue, isSigner: false, isWritable: true },
        { pubkey: eventQueue, isSigner: false, isWritable: true },
        { pubkey: bids, isSigner: false, isWritable: true },
        { pubkey: asks, isSigner: false, isWritable: true },
        { pubkey: baseVault, isSigner: false, isWritable: true },
        { pubkey: quoteVault, isSigner: false, isWritable: true },
        { pubkey: baseMint, isSigner: false, isWritable: false },
        { pubkey: quoteMint, isSigner: false, isWritable: false },
        // Use a dummy address if using the new dex upgrade to save tx space.
        {
          pubkey: authority ? quoteMint : web3_js_1.SYSVAR_RENT_PUBKEY,
          isSigner: false,
          isWritable: false,
        },
      ]
        .concat(
          authority
            ? { pubkey: authority, isSigner: false, isWritable: false }
            : [],
        )
        .concat(
          authority && pruneAuthority
            ? { pubkey: pruneAuthority, isSigner: false, isWritable: false }
            : [],
        ),
      programId,
      data: encodeInstruction({
        initializeMarket: {
          baseLotSize,
          quoteLotSize,
          feeRateBps,
          vaultSignerNonce,
          quoteDustThreshold,
        },
      }),
    });
  }
  static newOrder({
    market,
    openOrders,
    payer,
    owner,
    requestQueue,
    baseVault,
    quoteVault,
    side,
    limitPrice,
    maxQuantity,
    orderType,
    clientId,
    programId,
    feeDiscountPubkey = null,
  }) {
    const keys = [
      { pubkey: market, isSigner: false, isWritable: true },
      { pubkey: openOrders, isSigner: false, isWritable: true },
      { pubkey: requestQueue, isSigner: false, isWritable: true },
      { pubkey: payer, isSigner: false, isWritable: true },
      { pubkey: owner, isSigner: true, isWritable: false },
      { pubkey: baseVault, isSigner: false, isWritable: true },
      { pubkey: quoteVault, isSigner: false, isWritable: true },
      {
        pubkey: token_instructions_1.TOKEN_PROGRAM_ID,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
        isSigner: false,
        isWritable: false,
      },
    ];
    if (feeDiscountPubkey) {
      keys.push({
        pubkey: feeDiscountPubkey,
        isSigner: false,
        isWritable: false,
      });
    }
    return new web3_js_1.TransactionInstruction({
      keys,
      programId,
      data: encodeInstruction({
        newOrder: clientId
          ? { side, limitPrice, maxQuantity, orderType, clientId }
          : { side, limitPrice, maxQuantity, orderType },
      }),
    });
  }
  static newOrderV3({
    market,
    openOrders,
    payer,
    owner,
    requestQueue,
    eventQueue,
    bids,
    asks,
    baseVault,
    quoteVault,
    side,
    limitPrice,
    maxBaseQuantity,
    maxQuoteQuantity,
    orderType,
    clientId,
    programId,
    selfTradeBehavior,
    feeDiscountPubkey = null,
  }) {
    const keys = [
      { pubkey: market, isSigner: false, isWritable: true },
      { pubkey: openOrders, isSigner: false, isWritable: true },
      { pubkey: requestQueue, isSigner: false, isWritable: true },
      { pubkey: eventQueue, isSigner: false, isWritable: true },
      { pubkey: bids, isSigner: false, isWritable: true },
      { pubkey: asks, isSigner: false, isWritable: true },
      { pubkey: payer, isSigner: false, isWritable: true },
      { pubkey: owner, isSigner: true, isWritable: false },
      { pubkey: baseVault, isSigner: false, isWritable: true },
      { pubkey: quoteVault, isSigner: false, isWritable: true },
      {
        pubkey: token_instructions_1.TOKEN_PROGRAM_ID,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
        isSigner: false,
        isWritable: false,
      },
    ];
    if (feeDiscountPubkey) {
      keys.push({
        pubkey: feeDiscountPubkey,
        isSigner: false,
        isWritable: false,
      });
    }
    return new web3_js_1.TransactionInstruction({
      keys,
      programId,
      data: encodeInstruction({
        newOrderV3: {
          side,
          limitPrice,
          maxBaseQuantity,
          maxQuoteQuantity,
          selfTradeBehavior,
          orderType,
          clientId,
          limit: 65535,
        },
      }),
    });
  }
  static matchOrders({
    market,
    requestQueue,
    eventQueue,
    bids,
    asks,
    baseVault,
    quoteVault,
    limit,
    programId,
  }) {
    return new web3_js_1.TransactionInstruction({
      keys: [
        { pubkey: market, isSigner: false, isWritable: true },
        { pubkey: requestQueue, isSigner: false, isWritable: true },
        { pubkey: eventQueue, isSigner: false, isWritable: true },
        { pubkey: bids, isSigner: false, isWritable: true },
        { pubkey: asks, isSigner: false, isWritable: true },
        { pubkey: baseVault, isSigner: false, isWritable: true },
        { pubkey: quoteVault, isSigner: false, isWritable: true },
      ],
      programId,
      data: encodeInstruction({ matchOrders: { limit } }),
    });
  }
  static consumeEvents({
    market,
    eventQueue,
    coinFee,
    pcFee,
    openOrdersAccounts,
    limit,
    programId,
  }) {
    return new web3_js_1.TransactionInstruction({
      keys: [
        ...openOrdersAccounts.map((account) => ({
          pubkey: account,
          isSigner: false,
          isWritable: true,
        })),
        { pubkey: market, isSigner: false, isWritable: true },
        { pubkey: eventQueue, isSigner: false, isWritable: true },
        { pubkey: coinFee, isSigner: false, isWriteable: true },
        { pubkey: pcFee, isSigner: false, isWritable: true },
      ],
      programId,
      data: encodeInstruction({ consumeEvents: { limit } }),
    });
  }
  static cancelOrder({
    market,
    openOrders,
    owner,
    requestQueue,
    side,
    orderId,
    openOrdersSlot,
    programId,
  }) {
    return new web3_js_1.TransactionInstruction({
      keys: [
        { pubkey: market, isSigner: false, isWritable: false },
        { pubkey: openOrders, isSigner: false, isWritable: true },
        { pubkey: requestQueue, isSigner: false, isWritable: true },
        { pubkey: owner, isSigner: true, isWritable: false },
      ],
      programId,
      data: encodeInstruction({
        cancelOrder: { side, orderId, openOrders, openOrdersSlot },
      }),
    });
  }
  static cancelOrderV2(order) {
    const {
      market,
      bids,
      asks,
      eventQueue,
      openOrders,
      owner,
      side,
      orderId,
      programId,
    } = order;
    return new web3_js_1.TransactionInstruction({
      keys: [
        { pubkey: market, isSigner: false, isWritable: false },
        { pubkey: bids, isSigner: false, isWritable: true },
        { pubkey: asks, isSigner: false, isWritable: true },
        { pubkey: openOrders, isSigner: false, isWritable: true },
        { pubkey: owner, isSigner: true, isWritable: false },
        { pubkey: eventQueue, isSigner: false, isWritable: true },
      ],
      programId,
      data: encodeInstruction({
        cancelOrderV2: { side, orderId },
      }),
    });
  }
  static cancelOrderByClientId({
    market,
    openOrders,
    owner,
    requestQueue,
    clientId,
    programId,
  }) {
    return new web3_js_1.TransactionInstruction({
      keys: [
        { pubkey: market, isSigner: false, isWritable: false },
        { pubkey: openOrders, isSigner: false, isWritable: true },
        { pubkey: requestQueue, isSigner: false, isWritable: true },
        { pubkey: owner, isSigner: true, isWritable: false },
      ],
      programId,
      data: encodeInstruction({
        cancelOrderByClientId: { clientId },
      }),
    });
  }
  static cancelOrderByClientIdV2({
    market,
    openOrders,
    owner,
    bids,
    asks,
    eventQueue,
    clientId,
    programId,
  }) {
    return new web3_js_1.TransactionInstruction({
      keys: [
        { pubkey: market, isSigner: false, isWritable: false },
        { pubkey: bids, isSigner: false, isWritable: true },
        { pubkey: asks, isSigner: false, isWritable: true },
        { pubkey: openOrders, isSigner: false, isWritable: true },
        { pubkey: owner, isSigner: true, isWritable: false },
        { pubkey: eventQueue, isSigner: false, isWritable: true },
      ],
      programId,
      data: encodeInstruction({
        cancelOrderByClientIdV2: { clientId },
      }),
    });
  }
  static settleFunds({
    market,
    openOrders,
    owner,
    baseVault,
    quoteVault,
    baseWallet,
    quoteWallet,
    vaultSigner,
    programId,
    referrerQuoteWallet = null,
  }) {
    const keys = [
      { pubkey: market, isSigner: false, isWritable: true },
      { pubkey: openOrders, isSigner: false, isWritable: true },
      { pubkey: owner, isSigner: true, isWritable: false },
      { pubkey: baseVault, isSigner: false, isWritable: true },
      { pubkey: quoteVault, isSigner: false, isWritable: true },
      { pubkey: baseWallet, isSigner: false, isWritable: true },
      { pubkey: quoteWallet, isSigner: false, isWritable: true },
      { pubkey: vaultSigner, isSigner: false, isWritable: false },
      {
        pubkey: token_instructions_1.TOKEN_PROGRAM_ID,
        isSigner: false,
        isWritable: false,
      },
    ];
    if (referrerQuoteWallet) {
      keys.push({
        pubkey: referrerQuoteWallet,
        isSigner: false,
        isWritable: true,
      });
    }
    return new web3_js_1.TransactionInstruction({
      keys,
      programId,
      data: encodeInstruction({
        settleFunds: {},
      }),
    });
  }
  static closeOpenOrders({ market, openOrders, owner, solWallet, programId }) {
    const keys = [
      { pubkey: openOrders, isSigner: false, isWritable: true },
      { pubkey: owner, isSigner: true, isWritable: false },
      { pubkey: solWallet, isSigner: false, isWritable: true },
      { pubkey: market, isSigner: false, isWritable: false },
    ];
    return new web3_js_1.TransactionInstruction({
      keys,
      programId,
      data: encodeInstruction({
        closeOpenOrders: {},
      }),
    });
  }
  static initOpenOrders({
    market,
    openOrders,
    owner,
    programId,
    marketAuthority,
  }) {
    const keys = [
      { pubkey: openOrders, isSigner: false, isWritable: true },
      { pubkey: owner, isSigner: true, isWritable: false },
      { pubkey: market, isSigner: false, isWritable: false },
      {
        pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
        isSigner: false,
        isWritable: false,
      },
    ].concat(
      marketAuthority
        ? { pubkey: marketAuthority, isSigner: false, isWritable: false }
        : [],
    );
    return new web3_js_1.TransactionInstruction({
      keys,
      programId,
      data: encodeInstruction({
        initOpenOrders: {},
      }),
    });
  }
  static prune({
    market,
    bids,
    asks,
    eventQueue,
    pruneAuthority,
    openOrders,
    openOrdersOwner,
    programId,
    limit,
  }) {
    const keys = [
      { pubkey: market, isSigner: false, isWritable: true },
      { pubkey: bids, isSigner: false, isWritable: true },
      { pubkey: asks, isSigner: false, isWritable: true },
      // Keep signer false so that one can use a PDA.
      { pubkey: pruneAuthority, isSigner: false, isWritable: false },
      { pubkey: openOrders, isSigner: false, isWritable: true },
      { pubkey: openOrdersOwner, isSigner: false, isWritable: false },
      { pubkey: eventQueue, isSigner: false, isWritable: true },
    ];
    return new web3_js_1.TransactionInstruction({
      keys,
      programId,
      data: encodeInstruction({
        prune: { limit },
      }),
    });
  }
}
exports.DexInstructions = DexInstructions;
//# sourceMappingURL=instructions.js.map
