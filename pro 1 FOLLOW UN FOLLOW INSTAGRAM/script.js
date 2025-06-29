/*var istatus = document.querySelector("h5")

var add = document.querySelector("#add")
 var remove = document.querySelector("#remove")  

add.addEventListener("click", function(){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
})


remove.addEventListener("click",function(){
    istatus.innerHTML = "Stranger"
    istatus.style.color = "red"
})
*/

//the above code is used to do the task by two different buttons but if we have to do it with one then...

var istatus = document.querySelector("h5")
var btn = document.querySelector("#add")
var check = 0;
btn.addEventListener("click", function() {

    if (check == 0) {
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
    btn.innerHTML = "Remove Friend"
    console.log("Friends")
    check = 1;}
    else {
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        console.log("Stranger")
        check = 0;
    }
})
