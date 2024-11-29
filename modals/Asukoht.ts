export class Asukoht {
    constructor(
        private _street: string,
        private _house: string,
        private _city: string,
        private _postalCode: string
    ) {}

    get street() {
        return this._street;
    }

    set street(newStreet: string) {
        this._street = newStreet;
    }

    get house() {
        return this._house;
    }

    set house(newHouse: string) {
        this._house = newHouse;
    }

    get city() {
        return this._city;
    }

    set city(newCity: string) {
        this._city = newCity;
    }

    get postalCode() {
        return this._postalCode;
    }

    set postalCode(newPostalCode: string) {
        this._postalCode = newPostalCode;
    }
}