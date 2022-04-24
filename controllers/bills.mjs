export default function initBillsController(db) {
  const index = (request, response) => {
    db.Bill.findAll()
      .then((bills) => {
        response.send({ bills });
      })
      .catch((error) => console.log(error));
  };

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    index,
  };
}
