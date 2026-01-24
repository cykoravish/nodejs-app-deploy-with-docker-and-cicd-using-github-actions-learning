// node script.js

// 1.
// *
// **
// ***
// ****

// 2.
// ****
// ***
// **
// *

//3.
// 1
// 12
// 123
// 1234
// 12345

//4.
// 1
// 22
// 333
// 4444
// 55555

//5.
// 1
// 2 3
// 4 5 6
// 7 8 9 10

//6.
//      *
//     ***
//    *****
//   *******
//  *********
// ***********


let patterns = [
  {
    firstRow: "    *    ",
  },
  {
    firstRow: "   ***   ",
  },
  {
    firstRow: "  *****  ",
  },
  {
    firstRow: " ******* ",
  },
  {
    firstRow: "*********",
  },
];

patterns.forEach((e)=>{
    console.log(e.firstRow)
})
//test gpg passphase
//test gpg passphase test 2