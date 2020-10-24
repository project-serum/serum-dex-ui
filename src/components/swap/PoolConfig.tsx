import React, { useState } from 'react';
import { Card, Select } from 'antd';
import { NumericInput } from './NumericInput';
import './AddToLiquidity.less';
import { PoolConfig } from '../../utils/swapTypes';

const Option = Select.Option;

export const DEFAULT_DENOMINATOR = 10_000;

const FeeInput = (props: {
  numerator: number;
  denominator: number;
  set: (numerator: number, denominator: number) => void;
}) => {
  const [value, setValue] = useState(
    ((props.numerator / props.denominator) * 100).toString(),
  );

  return (
    <div style={{ padding: '3px 10px 3px 3px', border: '1px solid #434343' }}>
      <NumericInput
        className="slippage-input"
        size="small"
        value={value}
        style={{
          width: 50,
          fontSize: 14,
          boxShadow: 'none',
          borderColor: 'transparent',
          outline: 'transpaernt',
        }}
        onChange={(x: any) => {
          setValue(x);

          const val = parseFloat(x);
          if (Number.isFinite(val)) {
            const numerator = (val * DEFAULT_DENOMINATOR) / 100;
            props.set(numerator, DEFAULT_DENOMINATOR);
          }
        }}
      />
      %
    </div>
  );
};

export const PoolConfigCard = (props: {
  options: PoolConfig;
  setOptions: (config: PoolConfig) => void;
}) => {
  const {
    tradeFeeNumerator,
    tradeFeeDenominator,
    ownerTradeFeeNumerator,
    ownerTradeFeeDenominator,
    ownerWithdrawFeeNumerator,
    ownerWithdrawFeeDenominator,
  } = props.options;

  return (
    <Card title="Pool configuration">
      <div className="pool-settings-grid">
        <>
          <span>LPs Trading Fee:</span>
          <FeeInput
            numerator={tradeFeeNumerator}
            denominator={tradeFeeDenominator}
            set={(numerator, denominator) =>
              props.setOptions({
                ...props.options,
                tradeFeeNumerator: numerator,
                tradeFeeDenominator: denominator,
              })
            }
          />
        </>
        <>
          <span>Owner Trading Fee:</span>
          <FeeInput
            numerator={ownerTradeFeeNumerator}
            denominator={ownerTradeFeeDenominator}
            set={(numerator, denominator) =>
              props.setOptions({
                ...props.options,
                ownerTradeFeeNumerator: numerator,
                ownerTradeFeeDenominator: denominator,
              })
            }
          />
        </>
        <>
          <span>Withdraw Fee:</span>
          <FeeInput
            numerator={ownerWithdrawFeeNumerator}
            denominator={ownerWithdrawFeeDenominator}
            set={(numerator, denominator) =>
              props.setOptions({
                ...props.options,
                ownerWithdrawFeeNumerator: numerator,
                ownerWithdrawFeeDenominator: denominator,
              })
            }
          />
        </>
        <>
          <span>Curve Type:</span>
          <Select
            defaultValue="0"
            style={{ width: 200 }}
            onChange={(val) =>
              props.setOptions({
                ...props.options,
                curveType: parseInt(val) as any,
              })
            }
          >
            <Option value="0">Constant Product</Option>
            <Option value="1">Flat</Option>
          </Select>
        </>
      </div>
    </Card>
  );
};
