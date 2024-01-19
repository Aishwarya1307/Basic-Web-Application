console.log("Chalo shuru karate hai")


let rectangle = {
    length : 12,
    breadth : 15,

    draw: function () {
        console.log(this.length*this.breadth)
    }
};


// Factory Fuction

function createRectangle(length,breadth){
    
        return rectangle = {
            length : length,
            breadth : breadth,
            draw() {
                console.log(this.length*this.breadth)
            }
        };

}

let createObj = new createRectangle(12,15);
// add an key in object
createObj.color = "red"
console.log(createObj)

// Delete key value from object

delete createObj.color
console.log(createObj)

// Primitive types
let a =10
let b =a
a++
console.log(a)
console.log(b)


// Reference type

let c = {"val":10}
let d = c

c.val++

console.log(c)
console.log(d)



// call functon with increent value
//  output is ===== z = 10
let z = 10
function number(z) {
    z++
}

number(z)
console.log("value of z ", z)

// Using reference variable
// output==== y ==21
let y = {"val":20}

function inc(y) {
    y.val++
}

inc(y)
console.log("value of y ",y.val)


// For in loop

let Rectangle = {
    "length":5,
    "breadth":6
};

for (let key in Rectangle){
    // Keys are reflected as "key" variable
    // value is reflected as "Rectangle[key]"

    console.log(key,Rectangle[key])
};


//  For of loop

for (let key of Object.entries(Rectangle)){
       // Keys are reflected as "key" variable  using `Objects.keys(Rectangle)`
    // value is reflected as using Object.entries(Rectangle)
    console.log(key)
};


// Key is present in object or not find out

if ('color' in Rectangle){
    console.log("present")
}
else{
    console.log("Apsent")
};

//  clone the object 

src= {"value":15,
        "value2":30
    };

    // First way
let dest = {...src}
console.log("Dest:::",dest)

//  Seocnd way

let source = {}

for (key in src){
    source[key] = src[key];
}


src.value++
console.log("Source:::",source)
console.log("src:::",src)


//  Third way

let srce = Object.assign({},src);
console.log("srce :::",srce);
