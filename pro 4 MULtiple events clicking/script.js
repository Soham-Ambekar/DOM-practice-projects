var elem1 = document.querySelector("#elem1")
var elemImg = document.querySelector("#elem1 img")

elem1.addEventListener("mousemove",function(dets){
    elemImg.style.left = dets.x + "px"
    elemImg.style.top = dets.y + "px"
})

elem1.addEventListener("mouseenter",function(dets){
    elemImg.style.opacity = 1
})

elem1.addEventListener("mouseleave",function(dets){
    elemImg.style.opacity = 0
})


var elem2 = document.querySelector("#elem2")
var elem2Img = document.querySelector("#elem2 img")

elem2.addEventListener("mousemove",function(dets){
    elem2Img.style.left = dets.x + "px"
    elem2Img.style.top = dets.y + "px"
})

elem2.addEventListener("mouseenter",function(dets){
    elem2Img.style.opacity = 1
})

elem2.addEventListener("mouseleave",function(dets){
    elem2Img.style.opacity = 0
})



var elem3 = document.querySelector("#elem3")
var elem3Img = document.querySelector("#elem3 img")

elem3.addEventListener("mousemove",function(dets){
    elem3Img.style.left = dets.x + "px"
    elem3Img.style.top = dets.y + "px"
})

elem3.addEventListener("mouseenter",function(dets){
    elem3Img.style.opacity = 1
})

elem3.addEventListener("mouseleave",function(dets){
    elem3Img.style.opacity = 0
})




