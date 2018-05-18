// class
class Car{

	// properties
	public marca:string;
	public model:string;

	public show(){
		return "hello, I'm " + this.marca + ", Model " + this.model;
	}
}

var carObject = new Car();
carObject.marca = "Toyota";
carObject.model = "2015";
console.log(carObject.show());