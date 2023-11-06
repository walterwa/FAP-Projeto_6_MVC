import { RowDataPacket } from "mysql2";

export interface IEmployee extends RowDataPacket {
    
    id?: number;
    name: string;
    position: string;
}