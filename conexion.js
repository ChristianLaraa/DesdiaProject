const mysql = require('mysql');

// Configurar la conexión a la base de datos
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Lunapug09.',
    database: 'eventosDesidia'
});

// Conectar a la base de datos
conexion.connect((err) => {
    if (err) throw err;
    console.log('Conexión a la base de datos MySQL exitosa');
});

module.exports = conexion;