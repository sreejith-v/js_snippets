// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let obj1 = {
  l: ["a", "b", "c"],
  greet: () => "Hello",
  set push(item) {
    this.l.push(item);
  },
  get first() {
    return this.l[0];
  },
  get concat() {
    return this.l.join("");
  },
};

console.log(obj1.l);
obj1.push = "d";

console.log(obj1.l);
console.log("first", obj1.first);
console.log("concat", obj1.concat);
console.log("greet", obj1.greet());
