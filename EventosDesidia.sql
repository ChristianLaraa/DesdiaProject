CREATE TABLE eventos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dia INT,
    fecha DATE,
    hora TIME,
    rangoPrecios FLOAT,
    ubicacion VARCHAR(255),
    imagen VARCHAR(255),
    enlace VARCHAR(255)
);