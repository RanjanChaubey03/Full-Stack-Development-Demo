class Customer{
    

    constructor(private _firstName:string,private _lastname:string){
       
    }

    public get firstName():string{
        return this._firstName;
    }

    public set firstName(value:string){
        this._firstName=value;
    }

    public get lastname(): string {
        return this._lastname;
    }
    public set lastname(value: string) {
        this._lastname = value;
    }

}

let myCustomer = new Customer("Ranjan","Chaturvedi");

console.log(myCustomer.firstName);
console.log(myCustomer.lastname);