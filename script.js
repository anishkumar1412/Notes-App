const notesContainer = document.querySelector(".contentContainer");
const createBtn = document.querySelector(".logo");
let notes = document.querySelectorAll(".inputBox");
var icon=document.getElementById("icon");


function showNotes()
{
    notesContainer.innerHTML = localStorage.getItem("notes");
}
function updateStorage()
{
    localStorage.setItem("notes",notesContainer.innerHTML);
}
showNotes();
createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "inputBox";
    inputBox.setAttribute("contenteditable","true");
    img.src="delete.png";
    
    notesContainer.appendChild(inputBox).appendChild(img);
})

// program for the functioning of delete buttons
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName=="IMG"){
        e.target.parentElement.remove();
        updateStorage();

    }
    else if(e.target.tagName==="P")
    {
    notes = document.querySelectorAll(".inputBox");
    notes.forEach(nt=>{
        nt.onkeyup = function()
        {
            updateStorage();
        }
    })
    }
})
document.addEventListener("keydown",event =>{
    if(event.key=="Enter")
    {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

// code for theme changer 
icon.onclick=function(){

    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
       icon.innerHTML=' <i class="fa-solid fa-moon  "></i>'

    }
    else{
        icon.innerHTML=' <i class="fa-solid fa-sun "></i>'
    }
}

