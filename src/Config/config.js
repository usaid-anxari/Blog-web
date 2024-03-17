const config = {
    app_write_Url:String(import.meta.env.VITE_APPWRITE_URL),
    app_Bucket_Id:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    app_Project_Id:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    app_Database_Id:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    app_Collection_Id:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
}

export default config;