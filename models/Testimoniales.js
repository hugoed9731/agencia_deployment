import Sequelize from 'sequelize';
import db from '../config/db.js';


export const Testimonial = db.define('testimoniales', {
    // usualmente aui pondrias lo que planeaste para tu proyecto
    nombre:{
        type: Sequelize.STRING
    },
    correo:{
        type: Sequelize.STRING
    },
    mensaje:{
        type: Sequelize.STRING
    }
})

// Ahora vamos a importar esto para hacer la