const sql = require('mssql');
const express = require('express');
const app=express();
const { append } = require('express/lib/response');
const req = require('express/lib/request');
//const router = express.Router();
app.use(express.json());
console.log("hii");
//const Route= require('route');
const dbConfig = {

    server: "DESKTOP-I2H1MEU",
    database: "fristdb",
    user: "testlogin",
    password: "12345678",
    synchronize: true,
    trustServerCertificate: true,
    multipleStatments: true,
     "options":{
         "encrypt":true,
    }
 }
async function x () {
const pool = new sql.ConnectionPool(dbConfig);
await pool.connect();
const result = await pool.request()
  .query(`select * from [dbo].[login] where email='neha@123gmail.com' `)
  console.log("result:",result)
}
//app.use('/', Route)


app.get('/', function (req, res) {
  res.json('welcome') 

  console.log('email:',req.body.email);
  console.log('username:',req.body.username);


         
});
x();

// async  function  addlogin(login) {
//     try {
//       let  pool = await  sql.connect(dbconfig);
//       let  insertlogin = await  pool.request()
//       .input('username', sql.VarChar, login.uername)
//       .input('email', sql.VarChar, login.email)
//       .input('passward', sql.NVarChar, login.Quantity)
//       .execute('Insertlogin');
//       return  insertfristdb.recordsets;
//     }
//     catch (err) {
//       console.log(err);
//     }
//   }
//   module.exports = {
//     getlogin:  getlogin,
   
//  }
  app.listen(3000,function(){
    console.log("server is running on port ",3000);
})
// const connection = sql.connect(dbConfig, function (err) {

//    if (err) console.log(err);

//    else {

//        console.log('connection with db');

//    }

//    // var request = new sql.Request();



// });

// // const sqlConfig = {

// //     server: "DESKTOP-I2H1MEU",

// //     database: "firstdb",

// //     user: "testlogin",

// //     password: "12345678",




// //};
// async function x () {

//     console.log("@@@")

//     try {

       

//         await sql.connect(dbConfig);



//         console.log("vedika");


//        } catch (err) {

//            console.log(err)

//         // ... error checks

//        }

// }



// router.get('/', function (req, res) {



//     sql.connect(dbConfig.dbConnection()).then(() => {

//        return sql.query("SELECT count(*) FROM login");

//     }).then(result => {

//         res.send(result.recordset);

//     }).catch(err => {

//         res.status(500).send("Something Went Wrong !!!");

//     })



// });

// router.post('/', function (req, res) {



//     sql.connect(dbConfig.dbConnection()).then(() => {

//        return sql.query("insert into dbo.login (username,email,passward) values('neha123','neha1563@gmail.com','134245');");

//     }).then(result => {

//         res.send(result.recordset);

//     }).catch(err => {

//         res.status(500).send("Something Went Wrong !!!");

//     })



// });


// router.delete('/', function (req, res) {



//     sql.connect(dbConfig.dbConnection()).then(() => {

//        return sql.query("DELETE FROM login WHERE email='neha1563@gmail.com");

//     }).then(result => {

//         res.send(result.recordset);

//     }).catch(err => {

//         res.status(500).send("Something Went Wrong !!!");

//     })



// });



// x();