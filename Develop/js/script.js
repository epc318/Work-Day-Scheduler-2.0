// Show Current date
$("#currentDate").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))

let toDo = {};
let toDo = function() {
    localStorage.setItem("toDo",JSON.stringify(toDo));
};

let enterToDo = function(key) {
 let timeInt = $(".row").find(".crunchTime");
    for(let i = 0; i < timeInt.length; i++) {
        let taskTime = timeInt[i];
        if(taskTime.innerHTML === key) {
          let timeInt = $(taskTime).closest(".row").find(".description");
          $(timeInt).text(toDo[key]);
        }
    }
};

let pullToDos = function() {
    toDO = JSON.parse(localStorage.getItem("toDo"));
    if(!toDO) {
        toDO = {
        "8AM": [],"9AM": [], "10AM": [],"11AM": [], "12PM": [],"1PM": [],"2PM": [],"3PM": [],"4PM": [],"5PM": [],
        }
    };
    for(key in ToDo) {
        enterTask(key);
    }
};

pullToDos()