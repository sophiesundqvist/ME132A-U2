"use strict"


function updateListFromDatabase (){

    let destinations = document.getElementById("destinations")

    destinations.innerHTML = ""

    for(let i = 0; i < database.length; i++){
        let div = document.createElement("div")
        div.classList.add("destination")

        let destination = database[i].destination
        let country = database[i].country
        let type = database[i].type
        let grade = database[i].grade
        let line = i + 1

        div.innerHTML = `
        <div> ${line}</div>
        <div> ${destination}</div>
        <div> ${country}</div>
        <div> ${type}</div>
        <div> ${grade}</div>
        <div> <button>Remove</button></div>
        `

        destinations.appendChild(div)

    }

}

updateListFromDatabase ()


function addDestinationFromInput (){

    let form1 = document.getElementById("add-to-list1")
    let form2 = document.getElementById("add-to-list2")
    let destination = document.getElementById("add-destination").value
    let country = document.getElementById("add-country").value
    let type = document.getElementById("add-type").value
    let grade = document.getElementById("add-grade").value

    let destinationObject = {

        id: database.length + 1,
        destination: destination,
        country: country,
        type: type,
        grade: grade,

    }

    database.push(destinationObject)

    // varför kan jag inte reset när jag har class utan måste id på dessa formulär
    form1.reset()
    form2.reset()

}

function onClickAddDestinationToDatabase(){
    let button = document.getElementById("add")

    button.addEventListener("click", function(){
        addDestinationFromInput()
        updateListFromDatabase()

    })
}

onClickAddDestinationToDatabase()