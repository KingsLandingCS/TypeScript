var lname;
lname = 'Smith';
var newname = lname.toUpperCase();
console.log(newname);
var age;
var dob = "25";
var result = parseInt(dob);
var isValid = false;
console.log(isValid);
var empList;
empList = ["Smith", "John", "Santosh", 1];
var depList;
numList = [1, 2, 3, 4, 5];
var newNum = numList[5];
var results = numList.filter(function (num) { return num > 2; });
var emp = empList.find(function (emp) { return emp === 'Smith'; });
var sum = numList.reduce(function (acc, num) { return acc + num; }, 0);
console.log(results);
console.log(emp);
console.log(sum);
var c = 2 /* Color.Blue */;
var swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
swapNumbs[1];
var department;
department = 'IT';
department = 10;