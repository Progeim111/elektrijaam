export class Kontaktandmed {
    constructor(
        private _phoneNumber: string,
        private _email: string
    ) {}

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(newPhoneNumber: string) {
        this._phoneNumber = newPhoneNumber;
    }

    get email() {
        return this._email;
    }

    set email(newEmail: string) {
        this._email = newEmail;
    }
}
