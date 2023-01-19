profile =  {
    "name": "Krishna",
    "age": "20",
    "Residency":"Indian"
    }




let data = Object.keys(profile);

for(let i of data)
{
console.log(i, profile[i]);
}


// output in for off loop
//   Output:
// name Krishna
// age 20
// Residency Indian