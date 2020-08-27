import React from 'react';
import { notification } from 'antd';

export function notify({
  message,
  description,
  type = 'info',
  placement = 'bottomLeft',
}) {
  notification[type]({
    message: <span style={{ color: 'black' }}>{message}</span>,
    description: (
      <span style={{ color: 'black', opacity: 0.5 }}>{description}</span>
    ),
    placement,
    style: {
      backgroundColor: 'white',
    },
  });
}
