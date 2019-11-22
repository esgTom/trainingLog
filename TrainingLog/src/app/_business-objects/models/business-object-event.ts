export class BusinessObjectEvent {
    Operation: string;
    Status: any;
    PayLoad: String;

    constructor( operation: string, status: any, payLoad: any) {
        this.Operation = operation;
        this.Status = status;
        this.PayLoad = payLoad;
    }

}
