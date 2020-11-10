



return new Promise((resolve, reject)=>{
    const querString = "INSERT INTO tipo_usuario VALUES(NULL, ?)"
    const queryData  = [ 'Manager' ]
    conn.getConnection((error, connection)=>{
        if(error) reject({msg: 'No connection'})
        connection.query((err, results)=>{
            if(err){
                reject({msg: 'Query error'})
            }
            resolve( results )
        })
    })
})




