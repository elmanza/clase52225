const multer = require("multer");

const storage = multer.memoryStorage(); // Almacenar en memoria para procesar
const upload = multer({ storage: storage });

module.exports = upload;