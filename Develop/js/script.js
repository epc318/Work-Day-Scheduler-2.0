// Show Current date
$("#currentDate").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))

let toDo = {};
let toDo = function() {
    localStorage.setItem("toDo",JSON.stringify(toDo));
};

let enterTask = function(key) {
 let timeInt = $(".row").find(".crunchTime");
    for(let i = 0; i < timeDiv.length; i++) {
        let taskTime = timeDiv[i];
        if(taskTime.innerHTML === key) {
          let taskDiv = $(taskTime).closest(".row").find(".description");
          $(taskDiv).text(tasks[key]);
        }
    }
};