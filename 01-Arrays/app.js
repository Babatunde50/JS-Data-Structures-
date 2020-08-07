const names = ["Max", "Manu", "Julie", "Max"]

console.log(names[2]);
console.log(names.length);

for(const el of names) {
    console.log(el)
}

names.push("Julie")
console.log(names.length);

const julieIndex = names.findIndex(el => el === "Julie")
names.splice(2,1)
console.log(names)