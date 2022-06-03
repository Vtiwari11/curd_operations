const sql = require('mssql');

const express = require('express');

const router = express.Router();

const dbConfig = require('../Database/dbConnection');



console.log("hii");




const sqlConfig = {

    server: "DESKTOP-I2H1MEU",

    database: "firstdb",

    user: "testlogin",

    password: "12345678",

"options":{
    "encrypt":true,
    "enableAirthAbort":true

}


};
   

//     //options: {
// //
//         encrypt: true, // for azure

//         trustServerCertificate: true// change to true for local dev / self-signed certs

//     }

// }



// function check()

// {

//     if(sqlConfig)

//     {

//         console.log("connection successful!");

//     }

//     else{

//         console.log("error");

//     }

// }





async function x () {

    console.log("@@@")

    try {

       

        await sql.connect(sqlConfig);



        console.log("vedika");



        const result = await sql.query('select * from login');



        console.log(result);



       } catch (err) {

           console.log(err)

        // ... error checks

       }

}



router.get('/', function (req, res) {



    sql.connect(sqlConfig.dbConnection()).then(() => {

       return sql.query("SELECT count(*) FROM login");

    }).then(result => {

        res.send(result.recordset);

    }).catch(err => {

        res.status(500).send("Something Went Wrong !!!");

    })



});

router.post('/', function (req, res) {



    sql.connect(sqlConfig.dbConnection()).then(() => {

       return sql.query("insert into dbo.login (username,email,passward) values('neha123','neha1563@gmail.com','134245');");

    }).then(result => {

        res.send(result.recordset);

    }).catch(err => {

        res.status(500).send("Something Went Wrong !!!");

    })



});


router.delete('/', function (req, res) {



    sql.connect(sqlConfig.dbConnection()).then(() => {

       return sql.query("DELETE FROM login WHERE email='neha1563@gmail.com");

    }).then(result => {

        res.send(result.recordset);

    }).catch(err => {

        res.status(500).send("Something Went Wrong !!!");

    })



});



x();