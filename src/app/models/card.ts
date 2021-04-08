export interface Card{
    id: number;
    customerId:number;
    cardOwnerName:string;
    cardNumber:string;
    expirationDate:string;
    cardCvv:number;
}

export class CartTotal{
    customerId:number;
    cartTotal:number;
}