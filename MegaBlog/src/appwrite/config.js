import conf from "../conf/conf";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(conf.appwriteURL).setProject(conf.projectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userID }) {
    try {
      return await this.databases.createDocument(
        conf.appwritedatabaseId,
        conf.appwritecollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userID,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwritedatabaseId,
        conf.appwritecollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwritedatabaseId,
        conf.appwritecollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug){
    try {
        return await this.databases.getDocument(
            conf.appwritedatabaseId,
            conf.appwritecollectionId,
            slug
        )
    } catch (error) {
        console.log("Appwrite service :: getPost :: error",error);
        return false;
    }
  }

  async getPosts(queries = [Query.equal("status","active")]){
    try {
        return await this.databases.listDocuments(
            conf.appwritedatabaseId,
            conf.appwritecollectionId,
            queries
        )
    } catch (error) {
        console.log("Appwrite service :: getPosts :: error",error);
        return false;
    }
  }

  // file service 

  async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appwritebucketId,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("Appwrite service :: uploadFile :: error",error);
        return false;
    }
  }

  async deleteFile(flieID){
    try {
        await this.bucket.deleteFile(
            conf.appwritebucketId,
            flieID
        )
        return true;
    } catch (error) {
        console.log("Appwrite service :: deleteFile :: error",error);
        return false;
    }
  }

  getFilePreview(flieID){
    return this.getFilePreview(
        conf.appwritebucketId,
        flieID
    )
  }
}

const service = new Service();

export default service;
