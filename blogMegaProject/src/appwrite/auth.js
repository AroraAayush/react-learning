import {Client,ID,Account} from 'appwrite'
import { conf } from '../conf/config';
class Auth
{
    client=new Client();
    account;

    constructor()
    {
        this.client.setEndpoint(conf.appwriteUrl) 
        .setProject(conf.appwriteProjectId);               
    
     this.account = new Account(this.client);
    
    }

   async createAccount({email,password,name})
    {
        try{
            const user =await this.account.create(
                ID.unique(),email,name,password)
                if(user)
                {
                    this.login(email,password);
                }
                else
                return null;
        }
        catch(e)
        {
        return e;
        }
    }


    async login({email,password})
    {
        try{
           return await this.account.createEmailPasswordSession(email,password)
        }
        catch(e)
        {
            return e;
        }
    }


    async logout()
    {
        try{
            return await this.account.deleteSessions();
        }
        catch(e)
        {
            return null;
        }
    }


    async getCurrentUser()
{
    try{
        return await this.account.get();
    }
    catch(e)
    {
        return null;
    }
}}

export const authService=new Auth();

