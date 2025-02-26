const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const lightDarkBtn = document.getElementsByClassName("light-btn");
const mainContainer = document.getElementsByClassName("main-container");


function addTask(){
    if(taskInput.value === ''){
        alert("Please enter a task");
    } else{
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    taskInput.value = '';
    saveData();
}

addTaskBtn.addEventListener("click", addTask)

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", taskList.innerHTML)
};

function showList(){
    taskList.innerHTML = localStorage.getItem("data");
}

showList();



