"use strict"
function createDivWithDestination(destination){

    let div = document.createElement("div")
        div.classList.add("destination")

        div.innerHTML = `
        <div> ${destination.id}</div>
        <div> ${destination.destination}</div>
        <div> ${destination.country}</div>
        <div> ${destination.type}</div>
        <div> ${destination.grade}</div>
        <div> <button>Ta bort</button></div>
        `

        return div
        
    }
    
    
    function updateListFromDatabase (){
        
        let destinations = document.getElementById("destinations")
        
        destinations.innerHTML = ""
        
        for(let destination of database){
             
            destinations.appendChild(createDivWithDestination(destination))
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
        console.log(database)

    })
}

onClickAddDestinationToDatabase()


function filterDestinationByCountry (){

    let country = document.getElementById("filter-by-country").value
    let destinations = document.getElementById("destinations")

    destinations.innerHTML = ""

    for (let destination of database){
        
       if (country == destination.country)
            destinations.appendChild(createDivWithDestination(destination))
        
    }
}

function filterDestinationByType(){
    let type = document.getElementById("filter-by-type").value
    let destinations = document.getElementById("destinations")

    destinations.innerHTML = ""

    for (let destination of database){

        if (type == destination.type){

            console.log(destination)
            destinations.appendChild(createDivWithDestination(destination))


        }
    }
}

function filterDestinationByCLick (){
    let buttonCountry = document.getElementById("filter-button-country")
    let buttonType = document.getElementById("filter-button-type")
    let buttonReset = document.getElementById("reset-button")
    buttonCountry.addEventListener("click", filterDestinationByCountry ) 
    buttonType.addEventListener ("click", filterDestinationByType)
    buttonReset.addEventListener("click", updateListFromDatabase)

}

filterDestinationByCLick()




