// Show Current date
$("#currentDate").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))

let toDo = {};
let saveTask = function() {
    localStorage.setItem("toDO", JSON.stringify(toDO));
};
