const explosionSound = new Audio('explosion.mp3')
const burningSound = new Audio('burning.mp3')
const showExplosion = () => document.querySelector('.explosion').classList.add('explosion-start')

const bomba=document.querySelector(".bomb-image")
const explosion=document.querySelector(".explosion")
const repoDiv=document.querySelector(".rope-div")
bomba.addEventListener("click",function () {
    repoDiv.classList.add("active")
    setTimeout(()=>{
        explosionSound.play()
        showExplosion()
        burningSound.play()
    } ,2000)
    
})