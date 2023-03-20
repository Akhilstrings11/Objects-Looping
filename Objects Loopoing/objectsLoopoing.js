const fruits = ["apple","papaya","guava","orange","mango"]

for(let i = 0; i < fruits.length; i++){
    console.log("fruit Name :-", fruits[i])
}

console.log("")
console.log("-----Reverse Order-----")
for(let i = fruits.length; i > 0; i--){
    console.log("Fruit Name :-", fruits[i-1])
}

console.log("")
console.log("-----Using for of loop-----")

for(i of fruits){
    console.log(i)
}

console.log("")
console.log("-----Reverse Order using for of loop-----")
console.log("---Normal Order-")

for (i of fruits){
    console.log(i)
}

console.log("")
console.log("-----Reverse order----")

for (i in fruits){
    console.log(fruits[fruits.length - 1- i])
}


// Objects looping

var akhill = {
    name : "Akhil",
    rollNO : 20,
    group : "BCA",
    age : 22,
    akhillMarks : {
        Telugu : 50,
        Hindi : 44,
        English : 80,
        Maths : 34,
        science : 33,
        social : 72
    }
}

const akhillFailedSubjects = []

for(i in akhill){
    console.log(`property = ${i} and value = ${akhill[i]}`)
}

for( i in akhill.akhillMarks){
    console.log(i,akhill.akhillMarks[i])
    if(akhill.akhillMarks[i] < 35){
        akhillFailedSubjects.push({
            failedSubName : i,
            failedSubMarks : akhill.akhillMarks[i]
        })
    }
}

console.log(akhillFailedSubjects)

document.getElementById("failedSubjects").innerHTML = JSON.stringify(akhillFailedSubjects)
console.log(typeof JSON.stringify(akhillFailedSubjects))

let displayFailed = []

for (i of akhillFailedSubjects){
    displayFailed.push(i.failedSubName);
}

console.log(displayFailed)

document.getElementById('failedSubjects').innerHTML = displayFailed

const htmlDisplaySubWithMarks = akhillFailedSubjects

console.log(htmlDisplaySubWithMarks)

const htmlArray = []
for(i of htmlDisplaySubWithMarks){
    htmlArray.push(`${i.failedSubName} : ${i.failedSubMarks}`)
}
console.log(htmlArray)

document.getElementById("failedSubjects").innerHTML = htmlArray;

let akhillKeys = Object.keys(akhill)
console.log(akhillKeys)

let akhillValues = Object.values(akhill)
console.log(akhillValues)

let akhillKeysAndValues = Object.entries(akhill)
console.log(akhillKeysAndValues)

const akhillDetails = {...akhill}
console.log(akhillDetails)

localStorage.setItem("Akhil", JSON.stringify(akhillDetails))

let fetchedAkhilDetails = localStorage.getItem("Akhil")
console.log(JSON.parse(fetchedAkhilDetails))

setTimeout(() => {
    const akhilDetails = {...akhill}
    console.log(akhillDetails)
  
    localStorage.setItem("Akhil", JSON.stringify(akhillDetails))
  
    let fetchedAkhillDetails = localStorage.getItem("Akhil")
    console.log(JSON.parse(fetchedAkhillDetails) );
  
    const jayDetails = {...akhill}
    jayDetails.name = "jay"
    console.log(jayDetails)
  
    sessionStorage.setItem("jay", JSON.stringify(jayDetails))
  
    let fetchedjayDetails = sessionStorage.getItem("jay")
    console.log(JSON.parse(fetchedjayDetails) )
  }, 10000);