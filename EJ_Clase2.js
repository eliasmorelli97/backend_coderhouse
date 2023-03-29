const objetos =  [
    {
        manzanas:3,
        peras:2,
        carne:1,
        jugos:5,
        dulces:2,
    },
    {
        manzanas:1,
        sandias:1,
        huevos:6,
        jugos:1,
        panes:4
    }
]

function getAllProductTypes(array) {
    if (array.length === 0) return `Array must contain almost one object`;
    let types = [];
    // let uniqueTypes = [];
    // array.forEach((obj) => (types = [...types, ...Object.keys(obj)]));

    array.forEach((obj) => {
        if (!types.includes(...Object.keys(obj))) types.push(...Object.keys(obj));
    });

    // types.forEach((type) => {
    //   if (!uniqueTypes.includes(type)) uniqueTypes.push(type);
    // });
    // return uniqueTypes;
}

console.log(getAllProductTypes(objetos));