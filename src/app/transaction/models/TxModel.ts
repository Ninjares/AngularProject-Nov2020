import { SrvRecord } from 'dns'

export interface TxModel {
    id: string;
    title: string;
    imageUrl: string;
    price: number;
    publisherUsername: string;
    description: string;
}