let links = document.querySelectorAll("#main ul li")
links.forEach(links=>{
    links.addEventListener("click",function(event){
        links.forEach(links=>{
            links.parentElement.classList.remove("active")
            
        })
        this.parentElement.classList.add("active")
    })
})