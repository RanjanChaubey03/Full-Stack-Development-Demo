"use strict";
class Customer {
    constructor(theFirst, theSecond) {
        this._firstName = theFirst;
        this._lastname = theSecond;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastname() {
        return this._lastname;
    }
    set lastname(value) {
        this._lastname = value;
    }
}
let myCustomer = new Customer("Ranjan", "Chaturvedi");
console.log(myCustomer.firstName);
console.log(myCustomer.lastname);
