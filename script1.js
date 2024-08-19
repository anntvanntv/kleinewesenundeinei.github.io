


AOS.init({
    duration: 1200,
  })




//huevo play/pause & background color with click on photo:

let huevo = document.getElementById("ei")
let audioElementOu = new Audio("veus/haaaalloou.mp3")
huevo.addEventListener('click', huevO => {
    audioElementOu.paused ? audioElementOu.play() : music_stop();
    document.body.style.backgroundColor = "#ffffff"
        function music_stop() {
            audioElementOu.pause();
        }
})

//cocodrilos play/pause & background color with click on photo:

let cocodrilos = document.getElementById("cocodril")
let audioElementCocodril = new Audio("veus/cocodrilohandtuch.mp3")
cocodrilos.addEventListener('click', cocoRie => {
    audioElementCocodril.paused ? audioElementCocodril.play() : music_stop();
    document.body.style.backgroundColor = "#006400"
    function music_stop(){
        audioElementCocodril.pause();
        audioElementCocodril.currentTime = 0;
    }
})


//medusas play/pause & background color with click on photo:

let medusas = document.getElementById("medusas")
let audioElement = new Audio("Pop Nilsson Edit 1 Export 2.mp3")
medusas.addEventListener('click', musicaOn => {
    audioElement.paused ? audioElement.play() : music_stop(); 
    document.body.style.backgroundColor = "#00FFFF"    
        function music_stop(){
            audioElement.pause();
        }
})


//pajarraco play/stop & background color with click at photo: 

let pajarraco = document.getElementById("pajarraco")
let audioElementOcell = new Audio("veus/gutversteckenocell.mp3")
pajarraco.addEventListener('click', myPajaro => {
    audioElementOcell.paused ? audioElementOcell.play() : music_stop();
    document.body.style.backgroundColor = "#FFD700"
        function music_stop(){
            audioElementOcell.pause();
            audioElementOcell.currentTime = 0;
        }

})

//serp play/stop & backgroundcolor on click on photo:

let audioElementSerp = new Audio("veus/serpridipayachi.mp3")
let serpiente = document.getElementById("serpiente")
serpiente.addEventListener ('click', sssSSS => {
    audioElementSerp.paused ? audioElementSerp.play() : music_stop();
    document.body.style.backgroundColor = "#FF0000"
        function music_stop(){
            audioElementSerp.pause();
            audioElementSerp.currentTime = 0;
        }
})



//background color out with function and addEventListener ".fotos class":

let figurasaverd = document.querySelectorAll('.fotos');
for (let i = 0; i < figurasaverd.length; i++) {
    figurasaverd[i].addEventListener("mouseout", coloraverd => {
        document.body.style.backgroundColor = "#55b355"
    })
}


