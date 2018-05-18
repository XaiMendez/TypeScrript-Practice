// class
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.show = function () {
        return "hello, I'm " + this.marca + ", Model " + this.model;
    };
    return Car;
}());
var carObject = new Car();
carObject.marca = "Toyota";
carObject.model = "2015";
console.log(carObject.show());
