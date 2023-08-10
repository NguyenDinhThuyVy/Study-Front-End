// 1. Bind
const student = {
  firstName: "nguyen dinh",
  lastName: "thuy vy",
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};
