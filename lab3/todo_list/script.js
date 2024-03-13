const inputBox =document.getElementById("input-box"); 
const listContainer = document.getElementById("list-container");

function addTask(){ 
    if( inputBox.value ===''){ 
        alert("Your input is empty. Write something!");
    }
    else { 
        let li = document.createElement("li"); 
        li.innerHTML =inputBox.value; 
        listContainer.append(li)
        let span = document.createElement("span"); 
        span.innerHTML = "";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();

}

inputBox.addEventListener("keypress", function(event){ 
    if(event.key === "Enter"){ 
        document.getElementById("Add").click();
    }
})

listContainer.addEventListener("click", function(e){ 
    if (e.target.tagName === "LI"){ 
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        if (window.confirm("Are you sure you want to delete the task?")){ 
            e.target.parentElement.remove();
            saveData();
        }
        else{ 
            false; 
        }
    }
})

function saveData(){ 
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){ 
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();