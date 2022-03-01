"use strict"
function createDivWithDestination(destination, line){

    let div = document.createElement("div")
        div.classList.add("destination")
        div.id = destination.id

        div.innerHTML = `
        <div> ${line}</div>
        <div> ${destination.destination}</div>
        <div> ${destination.country}</div>
        <div> ${destination.type}</div>
        <div> ${destination.grade}</div>
        <div> <button>Ta bort</button></div>
        `

        return div
        
    }
    
    
    function updateList (database){
        
        let destinations = document.getElementById("destinations")
        
        destinations.innerHTML = ""
        
        for(let i = 0; i < database.length; i++){
            let destinationElement = createDivWithDestination(database[i], i + 1)
            destinations.appendChild(destinationElement)
            removeDestinationByClick()
    }

}

updateList (database)



function addDestinationFromInput (){

    let form1 = document.getElementById("add-to-list1")
    let form2 = document.getElementById("add-to-list2")
    let destination = document.getElementById("add-destination").value
    let country = document.getElementById("add-country").value
    let type = document.getElementById("add-type").value
    let grade = document.getElementById("add-grade").value

    let destinationObject = {

        id: database[database.length -1].id + 1,
        destination: destination,
        country: country,
        type: type,
        grade: grade,

    }

    if (destination.length > 1 && country.length > 1 && type.length > 1 && grade.length == 1){
        database.push(destinationObject)
    } else {
        alert("Formulär är inte ifyllt!")
    }


    form1.reset()
    form2.reset()

}

function onClickAddDestinationToDatabase(){
    let button = document.getElementById("add")

    button.addEventListener("click", function(){
        addDestinationFromInput()
        updateList(database)
        console.log(database)

    })
}

onClickAddDestinationToDatabase()


// function filterDestinationByCountry (){

//     let country = document.getElementById("filter-by-country").value
//     let destinations = document.getElementById("destinations")

//     destinations.innerHTML = ""

//     for (let i = 0; i < database.length; i++){
        
//        if (country == database[i].country)
//             destinations.appendChild(createDivWithDestination(database[i], i))
        
//     }
// }

function filterDestinationByCountry(country){
    let destinationByCountry = []

    for (let destination of database){

        if (destination.country == country){
            destinationByCountry.push(destination)
        }
    }

    return destinationByCountry
}



function filterDestinationByType(type){

    let destinationByType = []

    for (let destination of database){

        if (type == destination.type){
            destinationByType.push(destination)


        }
    }
    return destinationByType
}


function showFilterDivsCountry(){
    let country = document.querySelector("#filter-by-country").value
    let filterdDestinations = filterDestinationByCountry(country)

    updateList(filterdDestinations)

}

function showFilterDivsType(){
    let type = document.querySelector("#filter-by-type").value
    let filterdType = filterDestinationByType(type)

    updateList(filterdType)
}

function addClickToFilter(){
    let buttonCountry = document.getElementById("filter-button-country")
    let buttonType = document.getElementById("filter-button-type")
    let buttonReset = document.getElementById("reset-button")
    

    buttonCountry.addEventListener("click", showFilterDivsCountry)
    buttonType.addEventListener("click", showFilterDivsType)
    buttonReset.addEventListener("click", function(){
        updateList(database)
    })

}

addClickToFilter()




function removeDestinationById(id){

    for (let i = 0; i < database.length; i++){
        if (id == database[i].id){
            database.splice(i,1)
    }

    updateList(database)
}
}

function onRemoveDestinationById (event){

    let button = event.target
    let id = button.parentElement.parentElement.id
    
    if (confirm("Är du säker på att du vill ta bort denna destinationen?")){
        removeDestinationById(id)
    }
}



function removeDestinationByClick (){

    let buttons = document.querySelectorAll(".destination button")

    for (let button of buttons){
        button.addEventListener("click", onRemoveDestinationById)
    }

}


removeDestinationByClick()