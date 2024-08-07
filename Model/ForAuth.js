const mongoose =require('mongoose');
const { Schema,models,model} = mongoose


// 以下為註冊的 Schema
const ParentSchema=new Schema({
    Email:{
        type:String,
        required:[true,'Email is required']
    },
    Password:{
        type:String,
        required:[true,'Password is required']
    },
    ConfirmPassword:{
        type:String,
        required:[true,'ConfirmPassword is required']
    },
    // 這裡的 Sessions 在註冊時是空陣列，只有等到登入時才會建立 Sessions 物件
    Sessions:[],
    RegistrationOrder: { // 新增這個欄位
        type: Number,
        default: 0 // 或者設定為你需要的預設值
    }
})

const SignUpModel=models.User|| model('User',ParentSchema)


module.exports=SignUpModel