let x = 10
let y = 50

if(x > y){
    console.log("x is greater")
}
else{
    console.log("y is greater")
}

// program1

// ternary one expression?   statementOne:statemnetTwo

if (x > y){
    console.log("x is greater")
    console.log("y is greater")
}


//program2

age = 17
let q1 = age >= 18?"can drive":"canot drivr"
console.log(q1)

// program 3
//switch class without break

let city = "jaipur"

switch(city){
    case"pune":
        console.log("MH")
    case"jaipur":
        console.log("RJ")
    case"indore":
        console.log("MP")
    case"gantok":
        console.log("Assam")
    default:
        console.log("city not found")
}


// program 4

//switch case with break statement

let city2 = "jaipur"

switch(city2){
    case"pune":
       console.log("MH")
       break
    case"jaipur":
       console.log("RJ")
       break
    case"kanpur":
       console.log("UP")
       break
    case"shillong":
       console.log("Meghalay")
       break
    default:
       console.log("incorrect city")
}


//program 5

let city3 = "wardha"

switch(city3){

    case"nagpur":
    case"wardha":
       console.log("MH")
       break
    case"kanpur":
    case"varansi":
       console.log("UP")
       break
    case"jaipur":
    case"udaipur":
       consolele.log("RJ")
       break
    default:
        console.log("incorrect city")
    }

//program 6

let x1 = 10
let x2 = 50
let x3 = 300

let isGreatest = true

switch(isGreatest){

    case x1 >x2 && x2 > x3:
       console.log("x1 isgreater")
       break
    case x2 > x1 && x2 > x3:
        console.log("x2 isgreater")
        break
    default:
        console.log("x3 isgreater")
}







