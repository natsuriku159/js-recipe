// const number = 24

// // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
// for (let n = 1; n <= number; n++) {
//   // n を 3 で割ったあまりが 0
//   if (n % 3 === 0) {
//     console.log(`${n}!!!!!!!`)
//   } else {
//     console.log(n)
//   }
// }

//3が大好き
// const genkiFunction = function(number) {
//   for (let n = 0; n <= number; n++) {
//     if (n % 15 === 0) {
//       console.log(n+"fizzbuzz")
//     } else if (n % 5 === 0) {
//       console.log(n+"buzz")
//     } else if (n % 3 === 0) {
//       console.log(n+"fizz")
//     } else if (/3/.test(n)) {
//       console.log("さん！！")
//     } else {
//       console.log(n)
//     }
//   }
// }

// genkiFunction(100)

//元気な秒針
let count = 0
const countUp = function() {
  count += 1

  if(count % 3 === 0) {
    console.log(count+"!")
  } else {
    console.log(count)
  }
}

setInterval(countUp, 1000)