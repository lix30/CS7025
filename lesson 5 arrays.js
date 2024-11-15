
let week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log("Original array:", week);


console.log("First day:", week[0]); // Mon
console.log("Last day:", week[week.length - 1]); // Sun


week[6] = "Holiday";
console.log("Modified array:", week);


week.push("ExtraDay"); 
console.log("Array after adding:", week);

week.pop(); 
console.log("Array after removing:", week);


let weekdays = week.filter(day => day !== "Sat" && day !== "Holiday");
console.log("Weekdays array:", weekdays);


let lowercaseWeek = week.map(day => day.toLowerCase());
console.log("Lowercase array:", lowercaseWeek);


let students = [
    ["Amy", 85],
    ["Alice", 92],
    ["Ann", 78]
];


console.log("Second student's name:", students[1][0]); // Alice
console.log("Third student's score:", students[2][1]); // 78


console.log("Array contains 'Tue':", week.includes("Tue"));


let sortedWeek = [...week].sort();
console.log("Sorted array:", sortedWeek);


let totalScore = students.reduce((sum, student) => sum + student[1], 0);
console.log("Total score:", totalScore);