import { Client, Databases, Storage, Query, ID } from "appwrite";
import config from "../Config/config";

export class StorageService {
  client = new Client();
  databases;
  storage;
  //  Call Constructor
  constructor() {
    this.client
      .setEndpoint(config.app_write_Url)
      .setProject(config.app_Project_Id);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }
  // CreatePost
  async createPost({ title, content, slug, images, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.app_Database_Id,
        config.app_Collection_Id,
        slug,
        {
          title,
          content,
          userId,
          images,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: createPost :: error", error);
    }
  }
  // UpdatePost
  async updatePost(slug, { title, content, images, status, userId }) {
    try {
      return await this.databases.updateDocument(
        config.app_Database_Id,
        config.app_Collection_Id,
        slug,
        {
          title,
          content,
          images,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: updatePost :: error", error);
    }
  }
  // DeletePost
  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        config.app_Database_Id,
        config.app_Collection_Id,
        slug
      );
    } catch (error) {
      console.log("Appwrite serive :: deletePost :: error", error);
    }
  }
  // GetPost
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.app_Database_Id,
        config.app_Collection_Id,
        slug
      );
    } catch (error) {
      console.log("Appwrite serive :: getPost :: error", error);
      return false
    }
  }
  // GetAllPosts
  async getallPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.app_Database_Id,
        config.app_Collection_Id,
        queries
      );
    } catch (error) {
      console.log("Appwrite serive :: getPosts :: error", error);
      return false;
    }
  }
  // UploadFile
  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        config.app_Bucket_Id,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite serive :: uploadFile :: error", error);
      return false;
    }
  }
  // deleteFile
  async deleteFlie(fileId) {
    try {
      return await this.storage.deleteFile(config.app_Bucket_Id, fileId);
    } catch (error) {
      console.log("Appwrite serive :: deleteFile :: error", error);
      return false
    }
  }
  // getFilePreview
  getfilePreview(fileId){
    return result = this.storage.getFilePreview(config.app_Bucket_Id,fileId);
  }
}

const storageService = new StorageService({});

export default storageService;
