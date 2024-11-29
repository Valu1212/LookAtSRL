const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

//Parametros para conectar a la BD
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

//Cone a la bd
db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos: ', err);
        return;
    }
    console.log('Conectado a MySQL');
});

// rutas usuarios
app.post('/api/usuario/registrar', async (req, res) => {
    const { nombre, apellido, fechaNacimiento, email, telefono, contrasenia, contrasenia2 } = req.body;

    if (!nombre || !apellido || !fechaNacimiento|| !email || !telefono || !contrasenia || !contrasenia2) {
        return res.status(400).json({ message: 'Faltan datos' });
    }

    if (contrasenia !== contrasenia2) {
        return res.status(400).json({ message: 'Las contraseñas no coinciden' });
    }

    try {
        const hashedPassword = await bcrypt.hash(contrasenia, 10);
        const query = 'INSERT INTO usuario (nombre, apellido, fechaNacimiento, email, telefono, contrasenia) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(query, [nombre, apellido, fechaNacimiento, email, telefono, contrasenia], (err, result) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(409).json({ message: 'El correo ya está registrado' });
                }
                return res.status(500).json({ message: 'Error al crear el usuario', error: err });
            }
            res.status(201).json({ message: 'Usuario creado con éxito' });
        });
    } catch (error) {
        console.error('Error en la creación del usuario:', error);
        res.status(500).json({ message: 'Error en la creación del usuario' });
    }
}); 


app.post('/api/usuario/login', async (req, res) => {
    const { email, contrasenia } = req.body; // Asegúrate de que el cuerpo de la solicitud tenga ambos parámetros
    try {
      const query = "SELECT * FROM usuario WHERE email = ?";
      db.query(query, [email], (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Error en la solicitud' });
        }
        if (result.length === 0) {
          return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        const usuario = result[0];
        if (usuario.contrasenia === contrasenia) {
          return res.status(200).json({
            message: 'Login exitoso',
            id: usuario.id,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            email: usuario.email,
          });
        } else {
          return res.status(401).json({ message: 'Contraseña incorrecta' });
        }
      });
    } catch (error) {
      console.error('Error en la consulta', error);
      res.status(500).json({ message: 'Error en la solicitud' });
    }
  });

app.put('/api/usuario/actualizar/:id', async (req, res) =>{
    const id = req.params;
    const {nombre, apellido, contrasenia} = req.body;
    try {
        const query = "UPDATE usuario SET nombre = ?, apellido = ?, contrasenia = ? WHERE id = ?";
        db.query(query [nombre, apellido, contrasenia, id], (err, result) =>{
            if(err){
                return res.status(500).json({message: ''})
            }
        });
    } catch (error) {
        
    }
});

app.listen(3000, () => {
    console.log('Servidor escuchando en puerto 3000');
});