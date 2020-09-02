const link=document.querySelectorAll(".alternate-style"),
totalLinks=link.length;

function setActiveStyle(color) {
    
    for(let i=0; i<totalLinks; i++) {
        if(color === link[i].getAttribute("title")){
            link[i].removeAttribute("disabled");
        } else {
            link[i].setAttribute("disabled","true");
        }
    }
}

// Modo Dark

const bodyShin = document.querySelectorAll(".body-skin"),
totalBodyShin = bodyShin.length;

for (let i = 0; i<totalBodyShin; i++) {
    bodyShin[i].addEventListener("change", function(){
        if(this.value === 'dark'){
            document.body.classList.add("dark")
        } else {
            document.body.classList.remove("dark")
        }
    })
}

document.querySelector(".toggle-style-switcher").addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})