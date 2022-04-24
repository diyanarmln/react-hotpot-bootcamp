import React from 'react';

function CreateBillForm() {
  const handleBillCreateFormSubmit = (event) => {
    event.preventDefault();
    console.log('clicked');
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="inputBillName">
          {/* Bill Name */}
          <input type="text" className="form-control" id="inputBillName" placeholder="Name your bill" />
        </label>
        <button type="submit" className="btn btn-primary" onClick={handleBillCreateFormSubmit}>Create Bill</button>
      </div>
    </form>
  );
}

export default CreateBillForm;
