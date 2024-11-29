import { Maksestaatus } from "./Maksestaatus";
import { Tarbija } from "./Tarbija";

export class Arve {
    constructor(
        private _date: Date,
        private _consumption: number,
        private _amount: number,
        private _paymentStatus: Maksestaatus,
        private _consumer: Tarbija
    ) {}

    get date() {
        return this._date;
    }

    set date(newDate: Date) {
        this._date = newDate;
    }

    get consumption() {
        return this._consumption;
    }

    set consumption(newConsumption: number) {
        this._consumption = newConsumption;
    }

    get amount() {
        return this._amount;
    }

    set amount(newAmount: number) {
        this._amount = newAmount;
    }

    get paymentStatus() {
        return this._paymentStatus;
    }

    set paymentStatus(newPaymentStatus: Maksestaatus) {
        this._paymentStatus = newPaymentStatus;
    }

    get consumer() {
        return this._consumer;
    }

    set consumer(newConsumer: Tarbija) {
        this._consumer = newConsumer;
    }
}