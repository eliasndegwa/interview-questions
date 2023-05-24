// Given a string, reverse each word in the sentence. For example, Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG without using reverse keyword

const reverseString=(string)=>{
    return string.split("").reduce((prev,cur)=>{return cur+prev})
}
console.log(reverseString("Welcome to this Javascript Guide!"));

module.export={reverseString}