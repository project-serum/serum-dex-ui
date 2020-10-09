import React, {useState} from "react";
import {Col, Input, Modal, Row} from "antd";
import {EndpointInfo} from "../utils/types";

export default function CustomClusterEndpointDialog({
  visible,
  onAddCustomEndpoint,
  onClose,
} : {
  visible: boolean;
  onAddCustomEndpoint: (info: EndpointInfo) => void;
  onClose?: () => void;
}) {
  const [ customEndpoint, setCustomEndpoint] = useState('');
  const [ customEndpointName, setCustomEndpointName] = useState('');

  const onSubmit = () => {
    const params = {
      name: customEndpointName,
      endpoint: customEndpoint,
      custom: true,
    }
    onAddCustomEndpoint(params);
    onDoClose();
  };
  const onDoClose = () => {
    setCustomEndpoint('')
    setCustomEndpointName('')
    onClose && onClose();
  };
  const canSubmit = customEndpoint !== '' && customEndpointName !== '';

  return (
    <Modal
      title={'Add custom endpoint'}
      visible={visible}
      onOk={onSubmit}
      okText={'Add'}
      onCancel={onDoClose}
      okButtonProps={{ disabled: !canSubmit }}
    >
      <Row style={{ marginBottom: 8 }}>
        <Col span={24}>
          <Input
            placeholder="Cluster Name"
            value={customEndpointName}
            onChange={(e) => setCustomEndpointName(e.target.value)}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: 8 }}>
        <Col span={24}>
          <Input
            placeholder="Cluster Endpoint"
            value={customEndpoint}
            onChange={(e) => setCustomEndpoint(e.target.value)}
          />
        </Col>
      </Row>
    </Modal>
  );
}
