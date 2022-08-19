import { Selecter } from "./selecter";

export interface tableView {
    lable:string;
    key:string;
    type:string;
    value?:any;
    parent?:boolean;
    disbaled?:boolean;
    related?:boolean ;
    list?:Selecter[]
}
export class tableContent {
    lable:string;
    icon?:string;
    sublable?:string;
    totaldatacontent?:number;

}