export class Maksestaatus {
    constructor(
        private _paymentStatus: boolean,
        private _dueDate: Date,
        private _paidAmount: number,
        private _paymentDate: Date | null 
    ) {}

    get paymentStatus() {
        return this._paymentStatus;
    }

    set paymentStatus(newPaymentStatus: boolean) {
        this._paymentStatus = newPaymentStatus;
    }

    get dueDate() {
        return this._dueDate;
    }

    set dueDate(newDueDate: Date) {
        this._dueDate = newDueDate;
    }

    get paidAmount() {
        return this._paidAmount;
    }

    set paidAmount(newPaidAmount: number) {
        this._paidAmount = newPaidAmount;
    }

    get paymentDate() {
        return this._paymentDate;
    }

    set paymentDate(newPaymentDate: Date | null) { 
        this._paymentDate = newPaymentDate;
    }
}
