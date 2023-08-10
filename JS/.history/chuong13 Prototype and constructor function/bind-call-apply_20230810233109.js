// 1. Bind
const student = {
  firstName: "tran",
  lastName: "anh tuan",
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};
