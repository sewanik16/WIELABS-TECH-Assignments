
// A strobogrammatic number is a positive number that 
// appears the same after being rotated 180 degrees. 
// For example, 16891 is strobogrammatic.

function strobogrammatic(num){
    for(let i=0;i<num.length;i++){
        if(num[i]== "2" || num[i]== "3" || num[i]== "4" || num[i]== "5" || num[i]== "7")
        return false
    }
    let x=""
    for(let i=num.length-1;i>=0;i--){
        if(num[i]=="6") x=x+"9"
        else if(num[i]=="9") x=x+"6"
        else x=x+num[i]
    }
    for(let i=0;i<num.length;i++){
        if(num[i]!=x[i]) return false
    }
    return true
}

let num = "11811"
console.log(strobogrammatic(num))






// function strobogrammatic(n){
//     let num="";
//     let copyN = n
//     while(n>0){
//         n = n%10
//         num = num + n
//         n--
//     }
//     copyN = copyN.toString()
//     for(let i=0;i<num.length;i++){
//             j=num.length-1-i
//             if(num[i]!=copyN[j])
//             return false

//             j--
//     }
//     return true
// }


// let copy = n.toString()
//     let num = ""
//     for(let i=0;i<copy.length;i++){
//         if(copy[i]==9) {
//             num = num + 6
//         }else if(copy[i]==6) {
//             num = num + 9
//         }
//         else {
//             num = num + copy[i]
//         }
//     }
//     console.log(num)
//     copy = copy.toString()
//     if(num==copy) return true

//     return false