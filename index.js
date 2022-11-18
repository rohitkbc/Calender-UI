function changeColor() {
    var x = document.getElementById("input-date").value
    if (document.getElementById(x).style.background == "green") {
        document.getElementById(x).style.background = "white"
        document.getElementById("input-date").value = ""
    } else {
        document.getElementById(x).style.background = "green";
        document.getElementById("input-date").value = ""
    }
}