var heading = document.getElementById("heading")

function loadPage(){
     var userName = localStorage.getItem("userName")
     if (!userName){
        var askUserName = prompt("enter your name")
        localStorage.setItem("askUserName", askUserName)
        heading.innerHTML = "WELCOME" + " " + askUserName
        return
     }
     heading.innerHTML = "WELCOME " + userName
}


function saveData(){
    var fullName = prompt("enter full Name")
    var age = +prompt("enter your age")
    localStorage.setItem("fullName", fullName)
    localStorage.setItem("age", age)
}

function getData(){
    var fullName = localStorage.getItem("fullName")
    var age = localStorage.getItem("age")
    console.log("fullName", fullName)
} 

function setArray(){
    var fruits = ["apple", "mango", "banana"]
    var strinifyArr = JSON.stringify(fruits)
    localStorage.setItem("fruits", strinifyArr)
}

function getArray(){
    var getData = localStorage.getItem("fruits")
    var dataString = JSON.parse(getData)
    console.log(dataString)
}

function setObj() {

    var obj = {
        name: "ABDUL LATIF", age: 38
    }


    localStorage.setItem("Object", JSON.stringify(obj))

}

function getObj() {
    var getData = JSON.parse(localStorage.getItem("Object"))
    console.log(getData)
}