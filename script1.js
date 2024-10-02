


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



