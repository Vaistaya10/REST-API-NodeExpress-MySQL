//Ecmascript module - habilitar en package.json
// "type": "module"
import express from 'express';
import softwaresRoutes from './routes/softwares.routes.js';

const app = express();

app.use(express.json()); // Server recibe el JSON del cliente
app.use('/api/',softwaresRoutes); //endpoint
export default app; //exportar la app para poder usarla en otro lado