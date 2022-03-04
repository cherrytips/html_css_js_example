let user = { name: "john" };
let admin = { name: "admin" };

function hello_func() {
  console.log("hello " + this.name);
}

user.func = hello_func; // name == user.name == "john"
admin.func = hello_func; // name == admin.name == "admin"

user.func(); // john 출력
admin.func(); // admin 출력

user["func"]();
admin["func"]();
