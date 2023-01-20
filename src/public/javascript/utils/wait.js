const wait = (amount) =>
  new Promise((resolve) => {
    setTimeout(resolve, amount);
  });

export default wait;
