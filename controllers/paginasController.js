// SE VA A ENCARGAR DE MOSTRAR LAS DIFERENTES PÁGINAS
// importar el modelo para tener acceso a la BD
import {Viaje} from '../models/Viaje.js';
import {Testimonial} from '../models/Testimoniales.js';

const paginaInicio = async (req, res) => {
    // Consultar 3 viajes del modelo viaje
    // este codigo de abajo hace que ambas consultas arraquen al mismo tiempo
    const promiseDB = [];

    promiseDB.push( Viaje.findAll({limit: 3}) ); 
    // limit, le decimos cuanto queremos de la bd)
    promiseDB.push( Testimonial.findAll({limit: 3}));
    try {
        const resultado = await Promise.all(promiseDB);
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        }); 
    } catch (error) {
        console.log(errror);
    }

   
}

const paginaNosotros = (req, res) => {
    try {
        // const testimoniales = await
        res.render('nosotros', {
            pagina: 'Nosotros'
        }); 
        // render - espera el nombre de una vista
    } catch (error) {
        console.log(error)
    }
   
}

const paginaViajes = async (req, res) => {
    // Consultar BD
    // findAll se trae todos los resultados que hay en esa tabla
    const viajes = await Viaje.findAll();
    console.log(viajes)

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    }); 
    // render - espera el nombre de una vista
}


const paginaTestimoniales = async (req, res) => {
    try {
        // consultar el modelo de testimoniales
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        }); 
        // render - espera el nombre de una vista
    } catch (error) {
        console.log(error, 'cual es el error')
    }
    
}


// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const {slug} = req.params;
     // almacena el nombre de esa ruta en una variable de cualquieres nombre en la defi de rutas

    try {
        const viaje = await Viaje.findOne({where : {slug}});
        // realiza una where a la bd, y se lo asigna a resultado
        res.render('viaje', {
            pagina : 'Informacion Viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}


export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}