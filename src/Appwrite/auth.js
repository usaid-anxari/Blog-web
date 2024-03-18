import { Client, Account, ID } from "appwrite";
import config from '../Config/config';


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.app_write_Url)
            .setProject(config.app_Project_Id)
        this.account = new Account(this.client)
    }

    async createAccount({ name, email, password }) {
        try {
            const userAccount = await this.account.create(ID.unique(), name, email, password);
            if (userAccount) {
                return this.logIn({ email, password })
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error
        }
    }

    async logIn({ email, password }) {
        try {
            const userLogin = await this.account.createEmailSession({ email, password });
            return userLogin
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logOut() {
        try {
        return await this.account.deleteSessions();
        } catch (error) {
            console.log();
        }
    }

}

const authService = new AuthService({});

export default authService;