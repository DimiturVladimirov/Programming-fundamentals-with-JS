function demo(Startnum, endNum){
let sum = 0
let output = "";
for(let i = Startnum; i<= endNum;i++){
sum += i
output += `${i} `
}
console.log(output)
console.log(`Sum: ${sum}`)


}demo(5, 10)