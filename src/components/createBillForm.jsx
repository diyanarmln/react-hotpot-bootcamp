import React from 'react';
import axios from 'axios';
import ShowBillSplitter from './showBillSplitter.jsx';

function CreateBillForm() {
  const handleBillCreateFormSubmit = (event) => {
    event.preventDefault();
    const inputValue = document.getElementById('inputBillName').value;
    console.log('clicked');
    axios.post('/bill', { inputBillName: inputValue }).then((result) => {
      console.log(result.data);
        <ShowBillSplitter billData={result.data} />;
    }).catch((error) => console.log(error));
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="inputBillName">
          {/* Bill Name */}
          <input type="text" className="form-control" id="inputBillName" name="inputBillName" placeholder="Name your bill" />
        </label>
        <button type="submit" className="btn btn-primary" onClick={handleBillCreateFormSubmit}>Create Bill</button>
      </div>
    </form>
  );
}

export default CreateBillForm;
