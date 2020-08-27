import React, { useState } from 'react';
import { DEX_PROGRAM_ID } from '@project-serum/serum';
import { Row, Col, Select, Divider, Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useLocalStorageState } from '../utils/utils';
import { useMarket } from '../utils/markets';
import { notify } from '../utils/notifications';

const { Option } = Select;

const defaultProgramId = {
  name: 'Default',
  address: DEX_PROGRAM_ID.toBase58(),
};

export default function DexProgramSelector() {
  const { selectedDexProgramID, setSelectedDexProgramID } = useMarket();

  const [programIDs, setProgramIDs] = useLocalStorageState('dexProgramIDs', [
    defaultProgramId,
  ]);

  const [dexProgramName, setDexProgramName] = useState(null);
  const [dexProgramAddress, setDexProgramAddress] = useState(null);

  const onProgramIDChange = (name) => {
    const selectedProgramID = programIDs.find(
      (program) => program.name === name,
    );
    selectedProgramID && setSelectedDexProgramID(selectedProgramID.address);
  };

  const onAddDexProgramID = () => {
    try {
      const existingProgram = (programIDs || []).find(
        (program) =>
          program.address === dexProgramAddress ||
          program.name === dexProgramName,
      );
      if (existingProgram) {
        notify({
          message:
            'Name or address already exists (' + existingProgram.name + ')',
          type: 'info',
        });
        return;
      }
      const programs = [
        ...programIDs,
        { name: dexProgramName, address: dexProgramAddress },
      ];
      setProgramIDs(programs);
      setDexProgramName(null);
      setDexProgramAddress(null);
    } catch (e) {
      notify({ message: e.message, type: 'error' });
    }
  };

  const selectedValue = programIDs.find(
    (program) => program.address === selectedDexProgramID,
  )?.name;

  return (
    <Select
      onChange={onProgramIDChange}
      style={{ width: 240 }}
      defaultValue={selectedValue}
      dropdownRender={(menu) => (
        <>
          <Row>
            <Col span={24}>{menu}</Col>
          </Row>
          <Row>
            <Col span={24}>
              <Divider style={{ margin: '10px 0px' }} />
              <div style={{ margin: '5px' }}>
                <Input
                  placeholder="Name"
                  value={dexProgramName}
                  onChange={(e) => setDexProgramName(e.target.value)}
                />
                <Input
                  style={{ marginTop: '5px' }}
                  placeholder="Address"
                  value={dexProgramAddress}
                  onChange={(e) => setDexProgramAddress(e.target.value)}
                />
              </div>
            </Col>
          </Row>
          <Row justify="end">
            <Col>
              <Button
                disabled={!dexProgramAddress || !dexProgramName}
                onClick={onAddDexProgramID}
                block
                type="primary"
                icon={<PlusOutlined />}
              >
                Add program
              </Button>
            </Col>
          </Row>
        </>
      )}
    >
      {(programIDs || []).map((item, index) => (
        <Option key={index + ''} value={item.name}>
          {item.name}
        </Option>
      ))}
    </Select>
  );
}
