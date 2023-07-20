const inputText = document.getElementById("inputText")
const listContainer = document.getElementById("listContainer")
let uncheck = new Audio("belluncheck.mp3")
let check = new Audio("bellcheck.mp3")

function addTask(){
    if(inputText.value === ""){
        alert("Please enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputText.value = "";
    savedata();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        uncheck.play()
        savedata();
    }else if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        if(e.target.classList.contains("checked")){
            check.play()
        }else{
            check.pause()
        }
        savedata();
    }  
})





function savedata(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showtasks(){
   listContainer.innerHTML = localStorage.getItem("data") ;
}

showtasks();