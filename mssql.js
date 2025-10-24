const sql = require('mssql');

const config = {
    user : process.env.user,
    password : process.env.password,
    server : process.env.server,
    database : process.env.database,
    options:{
        encrypt:true,
        trustServerCertificate: true,
    }
}


async function connect() {
    try{
        await sql.connect(config);
        console.log("connected")
    }catch(err){
        console.log(err);
    }
    
}

module.exports = { sql, connect };

