


/* 
AOS.init({
    duration: 1200,
  }) */








//background color out with forEach and addEventListener ".fotos class":

let figurasaverd = document.querySelectorAll('.fotos');


figurasaverd.forEach(function(verdclar){
    verdclar.addEventListener("mouseout", () =>{
        document.body.style.backgroundColor = "#40bb6a";
    })
})



//musica play addEventListener forEach para cada foto

let fotos = document.querySelectorAll('.fotos');
let figuras = Array.from(fotos);
let musica = figuras.lastElementChild;

 
figuras.forEach(function(figura){
    figura.addEventListener("click", (event) => {
        
        figuras.forEach(function(anna) {
            document.body.style.backgroundColor = "#2BC12B" 
            if(anna != event.currentTarget)  {     
            anna.lastElementChild.pause()
            }
        })   
        let musica = figura.lastElementChild;
        musica.paused ? musica.play() : music_stop();
               function music_stop(){
                musica.pause();
                // musica.currentTime = 0; 
            }    
   })
}) 




//COOKIES

let cookieModal = document.querySelector(".cookie-consent-modal")
let cancelCookieBtn = document.querySelector(".cookies-btn.cancel")
let acceptCookieBtn = document.querySelector(".cookies-btn.accept")


cancelCookieBtn.addEventListener("click", function(){
    cookieModal.classList.remove("active")
})

acceptCookieBtn.addEventListener("click", function(){
    cookieModal.classList.remove("active")
    localStorage.setItem("cookieAccepted", "yes")
})

setTimeout(function (){
    let cookieAccepted = localStorage.getItem("cookieAccepted")
    if (cookieAccepted != "yes"){
        cookieModal.classList.add("active")
    }
}, 2000)



/* OVERFLOW HIDDEN WITH CLOSED UL */

function addRem() {
    const check = document.getElementById("check");
        if (check.checked) {
             document.body.style.overflow = "hidden"; 
        }  else{
            document.body.style.overflow = "";
           }
}

check.addEventListener("click", addRem);
    

