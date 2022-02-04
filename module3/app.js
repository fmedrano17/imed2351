console.log("Hello! This program gives you todays date, as well as the due date for this assignment.");

const dueDate = {
    month: "2",
    date: "4",
    year: "2022"
};

function getDueDate(month, date, year) {
    var dueDateString = (month + "-" + date + "-" + year);
    return dueDateString;
}

function todaysDate() {
    const d = new Date();
    let month = d.getMonth()+1;
    let date = d.getDate();
    let year = d.getFullYear();
    var dateString = (month + "-" + date + "-" + year);
    return dateString;
}

console.log("The current date is: " + todaysDate());
console.log("The due date is: " + getDueDate(dueDate.month, dueDate.date, dueDate.year));