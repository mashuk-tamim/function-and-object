// function add(num1, num2){
//     let sum= num1 + num2;
//     return sum;
// }

// let total= add(20, 30);
// console.log(total);

function getAverage(assignment1, assignment2, assignment3){
    const total= assignment1+assignment2+assignment3;
    const average= total/3;
    return average;
}

const assignmentMark1=60;
const assignmentMark2=60;
const assignmentMark3=58;

const myAverage= getAverage(assignmentMark1, assignmentMark2, assignmentMark3);
console.log('My average so far:', myAverage.toFixed(2));