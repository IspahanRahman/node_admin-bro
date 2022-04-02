const express=require('express')
const app=express()

//Admin bro
const AdminBro=require('admin-bro')
const expressAdminBro=require('@admin-bro/express')
const {Database,Resource}=require('@admin-bro/sequelize')

const db=require('./database/db')
const Student=require('./models/Student')

AdminBro.registerAdapter({Database,Resource})


const adminBro=new AdminBro({
    databases:[db],
    rootPath:'/admin',
    resources:[]
})
const router=expressAdminBro.buildRouter(adminBro)
app.use(adminBro.options.rootPath,router)


app.listen(8080,()=>{
    console.log(`Server is run on port 8080`)
})