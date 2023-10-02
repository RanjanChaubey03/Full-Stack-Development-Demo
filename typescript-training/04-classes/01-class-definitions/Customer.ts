class Customer{
    firstName : string;
    lastname : string;

    constructor(theFirst:string,theSecond:string){
        this.firstName=theFirst;
        this.lastname=theSecond;
    }

}

let myCustomer = new Customer("Ranjan","Chaubey");

console.log(myCustomer.firstName);
console.log(myCustomer.lastname);