// Run-length encoding is a fast and simple method of encoding strings. 
// The basic idea is to represent repeated successive characters as a single count and character. For example, 
// the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".
// // Implement run-length encoding and decoding. 
// You can assume the string to be encoded have no digits and consists solely of alphabetic characters. 
// You can assume the string to be decoded is valid.


function encodingStr(str){
    let res  = ""
    // let set = new Set()
    let count = 1
    for(let i=1;i<=str.length;i++){
        if(str[i-1]==str[i]){
            count++
        }else{
            res = res + count + str[i-1] 
            count = 1
        }
        // set.add(res)
    }
    return res
    // console.log(set)
    // let r = [...set]
    // r.shift()
    // return r.join("")
}

let str = "AAAABBBCCDAA"
console.log(encodingStr(str))