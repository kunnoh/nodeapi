const router = require('express').Router()
const {
    getOneProd,
    getAllProd,
    createProd,
    updateProd,
    deleteProd,
} = require('../controller/product.controller.js')
// const l = require('../controller/product.controller.js');

router.get('', getAllProd)
router.get('/:id', getOneProd)
router.post('', createProd)
router.put('/:id', updateProd)
router.delete('/:id', deleteProd)

module.exports = router
