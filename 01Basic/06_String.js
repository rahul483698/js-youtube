let name="rahul"
let RepoCount=50
//console.log(name+RepoCount+"value")

console.log(`my name is ${name} and my repo ${RepoCount}`)

const gameName=new String(" rahul ")
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())

// console.log(gameName.charAt(2))
// console.log(gameName.indexOf("h"))

const newString=gameName.substring(0,4)
//console.log(newString)

const AnotherString=gameName.slice(0,4)
//console.log(AnotherString)

const newStringOne=gameName.trim()
//console.log(newStringOne)

const newStringTwo=gameName.replace("r","N")
//console.log(newStringTwo)

const newString4=gameName.includes("r")
//console.log(newString4)

console.log(gameName.split("_"))

