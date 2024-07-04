let user = {
  id: 10,
  name: "karem",
  sayhello: () => "helllo",
  saynumber: (n) => n * 5,
  calNumber(m) {
    return m * 6;
  },
};
// console.log(user.name);
// console.log(user.sayhello());
// console.log(user.saynumber(2));
// console.log(user.calNumber(4));

module.exports = user;
