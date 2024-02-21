// for loop 
//for intialization;(conditionCheck;increment/decrement){
//  //statment
//}


for(let i = 1; i <= 3; i++){
    console.log(i)
}


for (let i = 3; i >= 1; i--){
    console.log(i)
}

for (let i = 2; i <= 20; i = i + 2 ){
    console.log(i)

}

//for loop with break statment

//program 1

for(let i =1; i <=5; i++){
    console.log(i)
    if ( i==3){
        break
    }
}

//program 2
for (let i= 5;  i>=1;i--){
    if(i==3){
        break
    }
    console.log(i)
}

// program 3
for (let i = 1 ; i<= 20;  i=i+2){
    if(i ==10){
    }
    console.log(i)
}


//program 4
// continue statement with for loop
for(let i = 1; i <=5; i++){
    if(i == 3){
        continue
    }
    console.log(i)
}


//program 5

for(let i = 5; i >= 1; i--){
    if(i ==3){
        continue
    }
    console.log(i)
}






















