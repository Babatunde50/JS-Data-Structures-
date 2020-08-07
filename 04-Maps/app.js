const resultData = new Map();

resultData.set("average", 1.56);
resultData.set("lastResult", null);

const germany = { name: "Germany", population: 89};

resultData.set(germany, 0.89);

for(const el of resultData) {
    console.log(el)
}

resultData.set("average", 33.80)
console.log(resultData)

console.log(resultData.get("average"));
console.log(resultData.average);

resultData.delete(germany);
console.log(resultData)