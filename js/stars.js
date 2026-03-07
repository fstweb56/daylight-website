const starsContainer = document.querySelector(".stars")

for(let i=0;i<120;i++){

const star = document.createElement("div")

star.classList.add("star")

const size = Math.random()*2+0.5

star.style.width = size+"px"
star.style.height = size+"px"

star.style.top = Math.random()*100+"%"
star.style.left = Math.random()*100+"%"

star.style.position = "absolute"

star.style.background = "white"
star.style.borderRadius = "50%"

star.style.opacity = Math.random()

star.style.animation = "twinkle 4s infinite alternate"

starsContainer.appendChild(star)

}