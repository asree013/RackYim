
import { patients } from "src/app/components/register/register-type";
import { bookingdetail } from "./bookingdetail";


export class Booking {
    id: string;
    bookingcode: string;
    detail: string;
    bookingstatus:number;
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

}
