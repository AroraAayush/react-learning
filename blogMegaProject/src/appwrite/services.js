import { Client,ID,Storage,Databases ,Query} from "appwrite";
import { conf } from "../conf/config";
class Services
{
    client=new Client();
    databases;
    storage;


    constructor()
    {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.databases=new Databases();
        this.storage=new Storage();
    }


    async createBlog({title,content,slug,ft_image,status,userId})
    {
        try{
            return await this.databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{title,content,ft_image,status,userId});
        } 
        catch(e)
        {
            return e;
        }
        
    }

    async deleteBlog(slug)
    {
        try{
            return await this.databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug);
        }
        catch(e)
        {
            return e;
        }
    }

    async updateBlog({title,content,ft_image,status},slug)
{
    try {
        return await this.databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{title,content,ft_image,status})
    }
    catch(e)
    {
        return e;
    }
}

async getBlog(slug)
{
    try
    {
        return await this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug);
    }
    catch(e)
    {
    return e;
    }
}


async getAllBlogsWhoseStatusAreActive(queries=[Query.equal("status","active")])
{
    try
    {
        return await this.databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionId,queries)
    }
    catch(e)
    {
    return e;
    }
}


async uploadImage(file)
{
    try
    {
        return await this.storage.createFile(conf.appwriteBucketId,file);
    }
    catch(e)
    {
        return e;
    }
}


async deleteImage(fileId)
{
    try
    {
        return await this.storage.deleteFile(conf.appwriteBucketId,fileId);
    }
    catch(e)
    {
        return e;
    }
}

async getImage(fileId)
{
    try
    {
        return await this.storage.getFile(conf.appwriteBucketId,fileId);
    }
    catch(e)
    {
        return e;
    }
}

 getPreview(file)
{
    try
    {
        return  this.storage.getFilePreview(conf.appwriteBucketId,fileId);
    }
    catch(e)
    {
        return null;
    }
}

}

export const services=new Services();