import React from 'react';
import CreateBillForm from './components/createBillForm.jsx';

export default function App() {
  return (
    <div className="app">
      <div>
        <h3>Create a New Bill</h3>
      </div>
      <div>
        <CreateBillForm />
      </div>
    </div>
  );
}
