import { Client,Databases,ID,Storage ,Query} from "appwrite";
import conf from "../conf/config";

export class Services
{
     client=new Client();
     storage;
     databases;

     constructor()
     {
        this.client.setEndpoint(conf.appwriteurl).setProject(conf.appwriteprojectid);
        this.databases=new Databases();
        this.storage=new Storage();
     }


     async createBlog({title,content,slug,ft_img,status,userId})
    {
        try{
          return await this.databases.createDocument(conf.appwritedatabaseid,conf.appwritecollectionid,slug,{title,content,slug,ft_img,status,userId})
        }
        catch(e)
        {
            throw e;
            // return null;
        }
        
    }


    async deleteBlog(slug)
    {
        try{
            return await this.databases.deleteDocument(conf.appwritedatabaseid,conf.appwritecollectionid,slug);
        }
        catch(e)
        {
            throw e;
        }

    }

    async updateBlog({title,content,ft_img,status})
    {
        try{
            return await this.databases.updateDocument(conf.appwritedatabaseid,conf.appwritecollectionid,slug,{title,content,ft_img,status})
        }
        catch(e)
        {
            throw e;
        }
    }


    async getBlog(slug)
    {
        try{
            return await this.databases.getDocument(conf.appwritedatabaseid,conf.appwritecollectionid,slug);
        }
        catch(e)
        {
            throw e;
        }
    }

    async getAllBLogsWhoseStatusAreActive(queries=[Query.equal("status","active")])
    {
        try{
            return await this.databases.listDocuments(conf.appwritedatabaseid,conf.appwritecollectionid,queries);
        }
        catch(e)
        {
            return e;
        }
    }

    async uploadImage(file)
    {
        try{
            return await this.storage.createFile(conf.appwritebucketid,ID.unique(),file);
        }
        catch(e)
        {
            throw e;
            return null;

        }
    }


    async deleteImage(fileId)
    {
        try{
            return await this.storage.deleteFile(conf.appwritebucketid,fileId);
        }
        catch(e)
        {
            throw e;
            return null;

        }
    }

     getImagePrview(fileId)
    {
        try{
            return this.storage.getFilePreview(conf.appwritebucketid,fileId);
        }
        catch(e)
        {
            throw e;
            return null;

        }
    }

    async getImage(fileId)
    {
        try{
            return await this.storage.getFile(conf.appwritebucketid,fileId);
        }
        catch(e)
        {
            throw e;
            return null;

        }
    }


}


export const service=new Services();