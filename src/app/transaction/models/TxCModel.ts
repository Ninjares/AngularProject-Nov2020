export interface TxComplete{
    id: string;
    title: string;
    imageUrl: string;
    price: number;
    buyer: string;
    seller: string;
    description: string;
    purchasedOn: Date;
    pos: number;
    odd: boolean;
}