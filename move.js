// var a = document.querySelector(".main")
var b = document.querySelectorAll(".container")
// var c = document.querySelector("h1")
var d = document.querySelector("#one")
// var e = document.querySelector("img")

// d.addEventListener("mousemove",function(dets){
//     e.style.left = dets.x+"px"
//     e.style.top = dets.y+"px"
// })

// d.addEventListener("mouseenter",function(dets){
//     e.style.opacity = 1
// })

// d.addEventListener("mouseleave",function(dets){
//     e.style.opacity = 0
// })

// var b = document.querySelectorAll(".container")

b.forEach(function (val) {

    val.addEventListner("mouseenter",function(){
        val.childNodes[2].style.opacity=1
    });

    val.addEventListner("mouseleave",function(){
        val.childNodes[2].style.opacity=0
    });

    val.addEventListner("mousemove",function(dets){
        val.childNodes[2].style.left=dets.x+"px"
        val.childNodes[2].style.top=dets.y+"px"
    });
});