const mongoose = require('mongoose');

let isConnected = false;
const url = "mongodb+srv://wang8119:FMD8Z4360Bp0RK1a@cluster0.w3kipgk.mongodb.net/myWebsite?retryWrites=true&w=majority&appName=Cluster0";

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
