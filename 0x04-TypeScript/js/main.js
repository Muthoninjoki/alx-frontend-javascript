var student1 = {
    firstName: "Nina",
    lastName: "Knowles",
    age: 32,
    location: "Kajiado"
};
var student2 = {
    firstName: "Drew",
    lastName: "Kennig",
    age: 29,
    location: "Mombasa"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.style.background = "red";
table.appendChild(tbody);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    nameCell.style.border = "1px solid grey";
    locationCell.style.border = "1px solid grey";
    nameCell.style.padding = "5px";
    locationCell.style.padding = "5px";
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
document.body.appendChild(table);
