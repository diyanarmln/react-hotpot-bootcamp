import React from 'react';

function CreateBillForm() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="inputBillName">
          {/* Bill Name */}
          <input type="text" className="form-control" id="inputBillName" placeholder="Name your bill" />
        </label>
        <button type="submit" className="btn btn-primary">Create Bill</button>
      </div>
    </form>

  );
}

export default CreateBillForm;
