
import pool from "../../config/conexion.js"

export const getAllUesers = async (req, res) => {
    const sql = 'select * from users'
    try{
        const connection = await pool.getConnection()
        const [rows] = await connection.query(sql)
        connection.release()
        res.json(rows)
    }catch(error){
        res.status(500).send('error con la consulta')
    }
    
} 

export const getUsersById = async(req, res) => {
    const id = req.params.id
    const sql = 'select * from users where id_users = ?'  
   
    try{
        const connection = await pool.getConnection()
        const [rows] = await connection.query(sql, [id])
        connection.release()
        rows[0] ? res.json(rows[0]):res.status(404).send('user no existe')
        console.log(rows[0])
        
    }catch(error){
        res.status(500).send('error con la consulta')
    }
}


export const createUsers = async(req,res) => {
    const values = req.body
    // console.log(values)
    const sql = 'insert into users SET ?'  
   try{
        const connection = await pool.getConnection()
        const [rows] = await connection.query(sql, [values])
        connection.release()
        res.status(500).send('nuevo usuario')
        console.log(rows)
        
    }catch(error){
        console.log(error)
        res.status(500).send('error con la consulta')
    }
}


export const updateUsers = async(req,res) => {
    const id =req.params.id
    const new_values = req.body
    const sql = "update users set ? where id_users = ? "
    try{
        const connection = await pool.getConnection()
        const [rows] = await connection.query(sql, [new_values, id]);
        connection.release();
        (rows.affectedRows == 0 )? res.status(404).send('user no existe'):res.send('datos actualizados')
        
    }catch(error){
        //console.log(error)
        res.status(500).send('error con la consulta'+ error)
    }
}

export const deleteUsers = async(req,res) => {
     const id =req.params.id
     const sql = "delete from users where id_users = ?"

      try{
        const connection = await pool.getConnection()
        const [rows] = await connection.query(sql, [id]);
        connection.release();
        (rows.affectedRows == 0 )? res.status(404).send('user no existe'):res.send('user eliminado')
    
    }catch(error){
        //console.log(error)
        res.status(500).send('error con la consulta'+ error)
    }
}
