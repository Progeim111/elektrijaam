export class Seade {
    constructor(
        private _id: number,
        private _name: string,
        private _manufacturer: string,
        private _nextService: Date,
        private _residualValue: number,
        private _purchasePrice: number,
        public isActive: boolean
    ) {}

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }

    get manufacturer() {
        return this._manufacturer;
    }

    set manufacturer(newManufacturer: string) {
        this._manufacturer = newManufacturer;
    }

    get nextService() {
        return this._nextService;
    }

    set nextService(newNextService: Date) {
        this._nextService = newNextService;
    }

    get residualValue() {
        return this._residualValue;
    }

    set residualValue(newResidualValue: number) {
        this._residualValue = newResidualValue;
    }

    get purchasePrice() {
        return this._purchasePrice;
    }

    set purchasePrice(newPurchasePrice: number) {
        this._purchasePrice = newPurchasePrice;
    }

}