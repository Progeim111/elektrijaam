import { Asukoht } from './Asukoht'; 
import { Kontaktandmed } from './Kontaktandmed';

export class Tarbija {
    constructor(
        private _name: string,
        private _contactInfo: Kontaktandmed,
        private _location: Asukoht
    ) {}

    get name() {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }

    get contactInfo() {
        return this._contactInfo;
    }

    set contactInfo(newContactInfo: Kontaktandmed) {
        this._contactInfo = newContactInfo;
    }

    get location() {
        return this._location;
    }

    set location(newLocation: Asukoht) {
        this._location = newLocation;
    }
}

