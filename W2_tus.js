
// Discussion 1
// n%3 ==0, ->show Ziff 
// n%5 ==0, ->show Zubb
// n%5 ==0 && n%3==0, ->show ZiffZubb

// function checkNum (n1, n2) {
    
//     for (var n = n1; n<=n2; n++) {
//         if (n % 3 ==0) {
//             console.log("Ziff");
//         }else if (n % 5 ==0) { 
//             console.log ("Zubb");
//         }else if (n % 3==0 && n % 5==0) {
//             console.log("ZiffZubb");
//         }else {
//             console.log(n);
//         }
//     }
// }
// checkNum (2, 9)


//Assignment 5 - Random Number
//Assignment 5.1
// for (var i=1; i<=5; i++) {
//     console.log(Math.random())
// }


// //Assignment 5.2 + 5.3
// function getRandomInt(start, end) {
//     return Math.floor(Math.random() * (end - start + 1) + start);
//   }

// for (var i = 1; i<=20; i++) {
//     console.log(getRandomInt(0, 9))
//     console.log(getRandomInt(1, 5))

// }
//Assignment 6 Nested For Loop
//Asignment 6.1
// function Assignment6_1(n) {
//     for (var i = 1; i <= n; i++) {
//       var s = "";
//       for (var j = 0; j < i; j++) {
//         s = s + i + " ";
//       }
//       console.log(s);
//     }
// }
// Assignment6_1(3)

//Asignment 6.2
// var line1 = " # # # #"
// var line2 = "# # # #"
// for (var i = 1; i<=8; i++) {
//     if( i % 2 ==0) {
//         console.log(line2)
//     }else {
//         console.log(line1)
//     }
// }

//Asignment 7 Iterate over Arrays
//Asignment 7.1
var workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];
var sumMoney = 0
for (var i = 0; i<workingHours.length; i++) {
    var dayMoney 
    dayMoney = workingHours[i]*25;
    console.log(dayMoney);
    sumMoney = sumMoney + dayMoney 
}
console.log(sumMoney)








