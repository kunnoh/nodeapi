const { getProduct, getProducts } = require('../../services/poduct.service')

class ProductController {
    constructor() {}

    static async getAllProd(req, res) {
        // create query
        const page = req.query.page || 1
        const limit = req.query.limit || 5
        // console.log(req.query)

        const { total, products } = await getProducts(page, limit)
        const resp = {
            page: page,
            total: total,
            products,
        }

        res.status(200).json(resp)
        return
    }

    static async getOneProd(req, res) {
        const id = req.params.id
        const p = await getProduct(id)

        res.status(200).json(p)
        return
    }

    static async createProd(req, res) {
        const prod = await cre
        res.status(201).json({ prod })
    }

    static async updateProd(req, res) {
        const id = req.params.id
        const p = await this.updateProduct(id)

        res.status(200).json(p)
        return
    }

    static async deleteProd(req, res) {
        const id = req.params.id
        const p = await this.deleteProduct(id)

        res.status(200).json(p)
        return
    }
}

module.exports = ProductController
