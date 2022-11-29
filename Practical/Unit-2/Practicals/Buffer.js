// const buf = Buffer.alloc(5, "a");
// console.log(buf);

// const buf = Buffer.alloc(5);

// var buf = new Buffer("Simply Easy Learning", "utf-8");
// console.log(buf.fill("a"));

// const buf1 = Buffer.from("buffer");
// console.log(buf1.toString());

// const buf2 = Buffer.from(buf1);
// console.log(buf2.toString());

// const buf3 = Buffer.from("This is node.js class");
// // console.log(buf3.toString());
// const buf4 = Buffer.from(buf3.toString("hex"));
// console.log(buf4.toString());

// const buf1 = Buffer.from("This is Node.js class");
// const buf2 = Buffer.from("54686973206973204e6f64652e6a7320636c617373", "hex");
// console.log(buf2.toString());
// console.log(buf1.toString("hex"));

// var buf = new Buffer.alloc(50);
// n = buf.write("This is Node.js class");
// console.log("The number of octets are:" + n);

//Buffer.concat()
// var buf1 = Buffer.from("wow");
// var buf2 = Buffer.from("hello");
// var buf3 = Buffer.concat([buf1, buf2], 8);
// console.log(buf3.toString());

// Buffer.compare() and Buffer.equals
// var buffer1 = Buffer.from("ABCD");
// var buffer2 = Buffer.from("ABCD");
// var result = buffer1.compare(buffer2);
// if (result === 0) {
//   console.log(buffer1 + " is equal to " + buffer2);
// } else {
//   console.log(buffer1 + " is not equal to " + buffer2);
// }

// var buffer1 = Buffer.from("ABCD");
// var buffer2 = Buffer.from("ABCD");
// var result = buffer1.compare(buffer2);
// console.log(result);
// if (result === 0) {
//   console.log(buffer1 + " is equal to " + buffer2);
// } else {
//   console.log(buffer1 + " is not equal to " + buffer2);
// }

// Buffer.equals() return trueif both buffers has exactly the same bytes;
// var buffer1 = Buffer.from("ABCD");
// var buffer2 = Buffer.from("ABCD");
// console.log(buffer1.equals(buffer2));

//Buffer.slice()
// var buf1 = Buffer.from("Hello World");
// var buf2 = buf1.slice(0, 8);
// console.log(buf2.toString());

// Buffer.length
// console.log(buf1.length);

// Buffer.includes()
// const buf = Buffer.from("This is a buffer");
// console.log(buf.includes("buffer"));

// Buffer.copy()
// var buffer1 = Buffer.from("wow");
// var buffer2 = Buffer.alloc(3);
// buffer1.copy(buffer2);
// console.log("buffer2 content: " + buffer2.toString());

// const buf1 = Buffer.alloc(26).fill("aquickbrownfoxjumpsoverthelazydog");
// const buf2 = Buffer.alloc(26).fill("?");
// buf1.copy(buf2, 8, 16, 20);
// console.log(buf2.toString("utf8", 0, 25));

// const data = {
//   name: "John Doe",
//   age: 32,
//   title: "Vice President of JavaScript",
// };

// const jsonStr = JSON.stringify(data);

// console.log(jsonStr);

// const jsonStr =
//   '{"name":"John Doe","age":32,"title":"Vice President of JavaScript"}';
// const data = JSON.parse(jsonStr);
// console.log(data);

var path = require("path");
var filename = path.basename(
  "C:/Users/VINEET SINGH RANA/Desktop/College/2022-2023 (Term 1)/INT222/Unit-2/Practicals/Buffer.js"
);
console.log(filename);
