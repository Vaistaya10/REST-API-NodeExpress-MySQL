import { pool } from '../db.js';
// req = requiere > solicitud (cliente)
// res = results > respuesta (servidor)
//aqui solo ira la logica
//es como una funcion que se exporta

export const getSoftwares = async (req, res) => {
  try {
    const querySQL = `SELECT * FROM softwares`
    const [results] = await pool.query(querySQL)
    res.send(results)
  } catch (error) {
    console.error("No se pudo concretar GET")
  }
};

export const getSoftwareById = async (req, res) => {
  try {
    const id = req.params.id
    const querySQL = `SELECT * FROM softwares where id = ?`
    const [results] = await pool.query(querySQL, id)

    if (results.length == 0) {
      return res.status(404).json({
        message: 'El ID enviado NO existe'
      })
    }
    res.send(results[0])
  } catch (error) {
    console.error("No se pudo concretar GET")
  }
};

export const createSoftwares = async (req, res) => {
  try {
    const querySQL = `INSERT INTO softwares (nombre,espaciomb,versionsoft,precio) values (?,?,?,?)`
    const { nombre, espaciomb, versionsoft, precio } = req.body

    const [results] = await pool.query(querySQL, [nombre, espaciomb, versionsoft, precio])
    if (results.affectedRows = 0) {
      res.send({
        status: false,
        message: "No se pudo completar el proceso",
        id: null
      })
    } else {
      res.send({
        status: true,
        message: "Registrado correctamente",
        id: results.insertId
      })
    }
  } catch {
    console.error("No se pudo concretar POST")
  }
};

export const updateSoftwares = async (req, res) => {
  try {
    const id = req.params.id
    const { nombre, espaciomb, versionsoft, precio } = req.body

    const querySQL = `
  UPDATE softwares SET 
  nombre = ?, 
  espaciomb = ?, 
  versionsoft = ?, 
  precio = ? 
  WHERE id = ?
  `;
    const [results] = await pool.query(querySQL, [nombre, espaciomb, versionsoft, precio, id])
    //se intento actualizar un registro con id inexistente
    if (results.affectedRows == 0) {
      return res.status(404).json({
        status: false,
        message: 'El ID enviado NO existe'
      })
    } else {
      return res.send({
        status: true,
        message: "Registro actualizado"
      })
    }

    //res.send("Actualizado correctamente")
    //res.sendStatus(202)

  }
  catch {
    console.error("No se pudo concretar PUT")
  }
};

export const deleteSoftwares = async (req, res) => {
  try {
    const querySQL = `DELETE FROM softwares WHERE id = ?`
    const id = req.params.id

    const [results] = await pool.query(querySQL, [id])

    //no se pudo eliminar
    if (results.affectedRows == 0) {
      return res.status(404).json({
        status: false,
        message: 'El ID enviado NO existe'
      })
    }
    else{// res.send() -> status 200 OK
      return res.send({
        status: true,
        message: 'Eliminado correctamente'
      })
    }
  } catch (error) {
    console.error("No se pudo concretar DELETE")
  }
};