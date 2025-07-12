const Course = document.querySelector("#course")
const Ass = document.querySelector("#Assignment")
const date = document.querySelector("#Date")
const Adams = document.querySelector(".button")
const container = document.querySelector(".container")


Adams.addEventListener("click", ()=>{
    const div = document.createElement("div")
    div.classList.add("task")
    
    let it = document.createElement("li")
    
    div.appendChild(it);
    console.log(Course.value);
    
    const checkbtn = document.createElement("button")
    checkbtn.innerHTML= '<i class="fa-solid fa-circle-check"></i>'
    div.appendChild(checkbtn)
  

    const deletebtn = document.createElement("button")
    deletebtn.innerHTML= '<i class="fa-solid fa-trash"></i>'
    div.appendChild(deletebtn)
    
    it.innerText = `${Course.value}`
    
    if (Course.value === "" , Ass.value === "", date.value ==="") {
        alert('Input your info');
    } else{
        container.appendChild(div)
    }
    Course.value="";
    Ass.value=""
    date.value=""

    console.log(it);
    
})
 
