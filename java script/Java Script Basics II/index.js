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

let createObj1 = createRectangle(12,15);


// Constructor fuction