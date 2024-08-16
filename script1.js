


AOS.init({
    duration: 1200,
  })






let huevo = document.getElementById("ei")
let audioElementOu = new Audio("veus/haaaalloou.mp3")
huevo.addEventListener('mouseover', huevO => {
    audioElementOu.play()
    document.body.style.backgroundColor = "#ffffff"
})
huevo.addEventListener('mouseout', huevoRoto => {
    document.body.style.backgroundColor = "#55b355"
    audioElementOu.pause()
})


let cocodrilos = document.getElementById("cocodril")
let audioElementCocodril = new Audio("veus/cocodrilohandtuch.mp3")
cocodrilos.addEventListener('click', cocoRie => {
    audioElementCocodril.play()
    document.body.style.backgroundColor = "#006400"
})

cocodrilos.addEventListener('mouseout', cocoNorie => {
    audioElementCocodril.pause()
    document.body.style.backgroundColor = "#55b355"
})

let medusas = document.getElementById("medusas")
let audioElement = new Audio("Pop Nilsson Edit 1 Export 2.mp3")
medusas.addEventListener('click', musicaOn => {    
    audioElement.play()
    document.body.style.backgroundColor = "#00FFFF"
})
medusas.addEventListener('mouseout', noMusica => {
    audioElement.pause();
    document.body.style.backgroundColor = "#55b355";
})

let pajarraco = document.getElementById("pajarraco")
let audioElementOcell = new Audio("veus/gutversteckenocell.mp3")
pajarraco.addEventListener('click', myPajaro => {
    audioElementOcell.play()
    document.body.style.backgroundColor = "#FFD700"
})
pajarraco.addEventListener('mouseout', tuPajaro => {
    audioElementOcell.pause()
    document.body.style.backgroundColor = "#55b355";
})

let audioElementSerp = new Audio("veus/serpridipayachi.mp3")
let serpiente = document.getElementById("serpiente")
serpiente.addEventListener ('click', sssSSS => {
    audioElementSerp.play();
    document.body.style.backgroundColor = "#FF0000"
})
serpiente.addEventListener('mouseout', zzzZZZ => {
    audioElementSerp.pause();
    document.body.style.backgroundColor = "#55b355"
} ) 


