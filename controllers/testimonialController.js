import {Testimonial} from '../models/Testimoniales.js'
const guardarTestimonial = async(req, res) => {
    // Validar ...
    const {nombre, correo, mensaje} = req.body;


    const errores = [];

    // trim quita los espacios en blanco al inicio y al final
    if(nombre.trim() ==='') {
        errores.push({mensaje : 'El nombre esta vació'})
    }

    if(correo.trim() ==='') {
        errores.push({mensaje : 'El correo esta vació'})
    }

    if(mensaje.trim() ==='') {
        errores.push({mensaje : 'El mensaje esta vació'})
    }

    if(errores.length > 0) {
        // Consultar testimoniales Existentes
        const testimoniales = await Testimonial.findAll();

        // Mostramos los mensajes de error en la vista
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
            // mantener el ultimo valor del fomulario que escribio el cliente
            // para que no se fruste el nene
        })
    } else {
        // Almacenar en la Base de datos
        try{
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
        
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error)
        }
    }
}


export {
    guardarTestimonial
}

    // req.body - es lo que el usuario coloca en el formulario
