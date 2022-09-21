function grabById(id) {
    return document.getElementById(id)
}

// document.getElementById("toggle").onclick = function() {
//    if (grabById("container").classList.contains("closed")) {
//     grabById("container").classList.remove("closed")
//    } else {
//     grabById("container").classList.add("closed")
//    }
// } 

document.getElementById("toggle").addEventListener("click", function() {
    if (grabById("container").classList.contains("closed")) {
     grabById("container").classList.remove("closed")
    } else {
     grabById("container").classList.add("closed")
    }
 } )


