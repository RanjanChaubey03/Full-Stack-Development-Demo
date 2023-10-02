"use strict";
class Customer {
    constructor(_firstName, _lastname) {
        this._firstName = _firstName;
        this._lastname = _lastname;
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
