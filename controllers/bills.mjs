export default function initBillsController(db) {
  const index = (request, response) => {
    db.Bill.findAll()
      .then((bills) => {
        response.send({ bills });
      })
      .catch((error) => console.log(error));
  };

  const create = (request, response) => {
    db.Bill.create({
      name: request.body.inputBillName,
    }).then((bill) => {
      console.log('successfully created bill');
      response.send(bill);
    }).catch((error) => console.log(error));
  };

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    index,
    create,
  };
}
