import conf from "../conf/config";
import { Client, Account, ID } from "appwrite";
class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteurl)
      .setProject(conf.appwriteprojectid);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique,
        email,
        name,
        password
      );
      if (userAccount) {
        this.login();
      } else return null;
    } catch (e) {
      throw e;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createSession(email, password);
    } catch (e) {
      throw e;
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (e) {
      throw e;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (e) {
      throw e;
    }
  }
}

const authService = new AuthService();
export default authService;
