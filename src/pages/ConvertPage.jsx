import React from 'react';
import FloatingElement from '../components/layout/FloatingElement';
import ConvertForm from '../components/ConvertForm';

export default function ConvertPage() {
  return (
    <FloatingElement style={{ flex: 1, paddingTop: 10 }}>
      <ConvertForm />
    </FloatingElement>
  );
}
