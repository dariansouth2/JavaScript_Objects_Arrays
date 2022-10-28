console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n")


const numb = [2, 22, 12, 17, 18, 39, 129];
let sum = 0;
function arraySum(arr){
    arr.forEach((number,index) => {
        sum += number;
    });
    return sum;
}
console.log(arraySum(numb));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const book = {
    title: "",
    author: "",
    numPages: null,
    hasRead: true
};
book.title = "Akira";
book.numPages = 550;
book.readCount= 1;

book.info = function (){
    return `${this.title}, ${this.numPages} pages , read ${this.readCount} times`;
}

console.log(book.info());

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

const sentence = "The quick brown fox jumps over the lazy dog";

const splitWords = sentence.split(" ");

let result = " ";

for(let word of splitWords){
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--){
        reversedWord += word[i];
    }
    result += (reversedWord + " ");
    
}
console.log(result.trim());
// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

let dataSplit = csvData.split("\n");
const headers = dataSplit[0].split(",")
console.log(headers);
const resultObject = [];

for(let i = 1; i < dataSplit.length; 1++){
    const values = dataSplit[i].split(",");
    console.log ("Values: ", values);
    let obj = {};
    obj.name = values[0];
    obj.age = values[1];
    console.log("Object: ", obj);
    resultObject.push(obj);
}
console.log(resultObject);