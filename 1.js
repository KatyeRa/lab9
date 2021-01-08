console.log ("Задача 1")
let student = {
  firt_name: "Ракитова",
  last_name: "Екатерина",
  group: "201-322",
};
let ReadStudent = "Список: ";
for (key in student){
  ReadStudent += key + " ";
}
console.log(ReadStudent);
console.log(`Студент ${student.firt_name} ${student.last_name} учиться в ${student.group}`)
