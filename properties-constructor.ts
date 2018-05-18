// class
class Properties{

	//properties
	public strint_v:string;
	public number_v:number;
	public boolean_v:boolean;
	public array_v:Array<any>;
	public any_v:any;

	//constructor
	constructor(){
		this.strint_v = "";
		this.number_v = 10;
		this.boolean_v = false;
		this.array_v = ["01", "02", "03"];
		this.any_v = {
			"propertie1":"value1",
			"propertie2":"value2"
		}
	}
}

var propertiesObject = new Properties();