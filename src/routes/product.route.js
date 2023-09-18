import { Router } from 'express';

import {
    getOneProd,
    getAllProd,
    createProd,
    updateProd,
    deleteProd,
} from '../controller/product.controller.js';
// const l = require('../controller/product.controller.js');


// Create an Express router
const prodRouter = Router();

prodRouter.get('', getAllProd);
prodRouter.get('/:id', getOneProd);
prodRouter.post('', createProd);
prodRouter.put('/:id', updateProd);
prodRouter.delete('/:id', deleteProd);

export default prodRouter;
