import { patients } from "../register/register-type";

export class reserves {
    id: string;
    bookingcode: string;
    detail: string;
    bookingstatus:number;
    bookingdetail:string;
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
