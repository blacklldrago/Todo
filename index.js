// TASK 1
// let stolenItems = {
//     tv: 30,
//     skate: 20,
//     stereo:50
// }
// let ans = Object.values(stolenItems);
// if(ans.length == 0){
//     console.log("Luck you!");
// }
// else{
//     console.log(ans.reduce(function(a, b){return a+b}));    
// }

// TASK 2
// function get(ar){
//     let obj = {}
//     let ans
//     for(let i = 0; i<ar.length; i++){
//         ans = ar.filter(function(a){return a === ar[i]})
//         obj = {
//             ...obj,
//             [ar[i]]:ans.length
//         }
//     }
//     return obj
// }

// console.log(get(["A", "A", "A", "B", "A", 1, 1, true]));

