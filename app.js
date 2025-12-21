//2D array

// var matrix=[[1,2,3],[4,5,6],[7,8,9]]
// console.log(matrix[1][1])

// Object
var student = {

}
student.name = "Aeiyan"
console.log(student)
var mobile = {
    brand: "Samsung",
    price: 56000,
    "First Name": "Aeiyan",
    OS: "Andriod",
    RAM: "16GB",
    color: ["blue", "black", "red"],
    isInStock: true,
    discount: 20,
    specification: {
        resolution: "728X1028",
        display: "OLED",
        storage: "512GB"
    }
}
var mobilePhones = [
    {
        brand: "Iphone",
        Os: "IOS",
        RAM: "36GB"
    }, {
        brand: "Samsung",
        Os: "Andriod",
        RAM: "26GB"
    }, {
        brand: "Huwavai",
        Os: "Huwavai",
        RAM: "86GB"
    },
]

for (var i = 0; i < mobilePhones.length; i++) {
    console.log(mobilePhones[i].brand)
}
// console.log(mobilePhones[1].brand)
