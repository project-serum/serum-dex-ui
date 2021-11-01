import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function Link({ external = false, ...props }) {
  let { to, children, ...rest } = props;
  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <RouterLink to={to} {...rest}>
      {children}
    </RouterLink>
  );
}
