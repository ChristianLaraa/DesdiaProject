const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: '127.0.0.1:3306', // Cambia esto por el host de tu base de datos
  user: 'root', // Cambia esto por tu nombre de usuario de MySQL
  password: 'Lunapug09.', // Cambia esto por tu contraseña de MySQL
  database: 'EventosDesidia' // Cambia esto por el nombre de tu base de datos
});

// Conexión a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err.message);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});