// const students={name:"roy",college:"npgc"}
// function studentsdetails(){
//     console.log(students);
// }
// studentsdetails();
// students.class="bvoc";
// studentsdetails();
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function funOne() {
  console.log(number);
  let newarray = [];
  for (let i = 0; i < number.length; i++) {
    newarray.push(number[i] * 2);
  }
  return newarray;
}
function fun2(action) {
  let result = action();
  console.log("result", result);

  
}
//higher order function
fun2(funOne);

function fun3() {
  const n = [1, 2, 3, 4, 5];
  const even = n.filter((num) => num % 2 === 0);
  console.log(even);
}
