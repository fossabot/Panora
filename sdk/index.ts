//import axios from 'axios';

/*export interface Lib {
    "/crm/contact": {},
}

export type Path = (path: keyof Lib) => void;*/

//type Method = "GET" | "POST" | "PATCH" | "DELETE"

type ContactBody = {
    first_name: string;
    last_name: string;
    email_addresses: string[];
    phone_numbers: string[];
}

export default class PanoraApiClient {

    static readonly API_URL = "";

    constructor(){}

    public async getContacts(): Promise<string[]> {
        return [];
    }

    public createContact({
        first_name, 
        last_name, 
        email_addresses, 
        phone_numbers
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } : ContactBody): any {
        const app = {
            first_name, 
            last_name, 
            email_addresses, 
            phone_numbers
        }
        //const res = await axios.post("", {});
        return app;
    }

}