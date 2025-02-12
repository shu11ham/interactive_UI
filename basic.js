var a = document.querySelector(".first #fir")
// var b = document.querySelector(".first #sec")
var c = document.querySelector(".first img")
var d = document.querySelector(".first h5")
flag =0

// a.addEventListener("click",function(){
//     a.innerHTML="followed"
//     // a.style.border="5px solid yellow"
// })

// b.addEventListener("click",function(){
    // b.innerHTML="Respect"
// })

//  c.addEventListener("click",function(){
//     if(flag==0){
//     //  a.innerHTML="followed"
//      c.style.border="5px solid yellow"
//      falg=1
//     }
//     else{
//         c.style.border="5px solid cornflowerblue" 
//     }
//  })


a.addEventListener("click",function(){
    if(flag==0){
      a.innerHTML="Remove Friend"
      a.style.backgroundColor="pink"
      d.innerHTML="Friend"
      d.style.color="green"
      c.style.border="5px solid yellow"
      flag=1
    }
    else{
        a.innerHTML="Add Friend"
        d.innerHTML="Stranger"
        d.style.color="red" 
        flag=0
        a.style.backgroundColor="gold"
        c.style.border="5px solid cornflowerblue" 
    }
})

// b.addEventListener("click",function(){
//     d.innerHTML="Stranger"
//     // c.style.border="5px solid yellow"
// })

