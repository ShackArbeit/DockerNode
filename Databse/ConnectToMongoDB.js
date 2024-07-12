const mongoose = require('mongoose');
require('dotenv').config()

let isConnected = false;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const url = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

const connectToDB = async () => {
  mongoose.set('strictQuery', true);
  if (isConnected) {
    console.log('已經連線到 MongoDB 了 !');
    return;
  }
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "myWebsite", // 指定資料庫名稱
    });
    isConnected = true;
    console.log('你已經成功連線了 !');
  } catch (error) {
    console.error('連線失敗', error);
    isConnected = false; // 連線失敗時將 isConnected 設為 false
  }
}

module.exports = connectToDB;
