import express from 'express';
import {paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje} from '../controllers/paginasController.js';
import {guardarTestimonial} from '../controllers/testimonialController.js';


const router = express.Router(); // usamos la misma instancia de express, pero estendemos su router

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);




export default router;

/*
ejemplo pasar variable hacia una vista
   res.render('nosotros', {
        // colocamos toda la informacion que deseamos mandar hacia la vista
        viajes
    }); 
*/