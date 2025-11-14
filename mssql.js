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
async function Connect() {
    try {
        const pool = await sql.connect(config);
        console.log("connected");
        return pool;  
    } catch (err) {
        console.log(err);
        throw err;
    }
}



module.exports = { sql, Connect };

