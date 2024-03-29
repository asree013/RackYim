
import { patients } from "src/app/components/register/register-type";
import { bookingdetail } from "./bookingdetail";
import { Typebooking } from "./typebooking";


export class Booking {
    id: string;
    bookingcode: string;
    detail: string;
    bookingstatus:number =4;
    bookingdetail:bookingdetail;
    patient:patients;
    datebooking:string;
    typebookingId:string;
    patientId:string;
    userId:string;
    companyId:string;
    updatedAt: string;
    createdAt: string;
    message: string;
    typebooking:Typebooking
}
