// class
var Properties = /** @class */ (function () {
    //constructor
    function Properties() {
        this.strint_v = "";
        this.number_v = 10;
        this.boolean_v = false;
        this.array_v = ["01", "02", "03"];
        this.any_v = {
            "propertie1": "value1",
            "propertie2": "value2"
        };
        console.log("strint_v", this.strint_v);
        console.log("number_v", this.number_v);
        console.log("boolean_v", this.boolean_v);
        console.log("array_v", this.array_v);
        console.log("any_v", this.any_v);
    }
    return Properties;
}());
var propertiesObject = new Properties();
