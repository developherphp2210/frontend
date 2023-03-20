
export function opendb(sqlite3){
    let db = new sqlite3.Database('./db_dati.db',this.sqlite3.OPEN_READWRITE,(err) => {
        if (err) return console.error(err.message);
    });

    return db;
}
    
export function read_operatori(db){

    let sql = 'select * from operatori';

    db.all(sql,[],(err,rows) => {

        if (err) return console.error(err.message);
            
        return rows;  
        
    });
}

export function closedb(db){
    db.close();
}

