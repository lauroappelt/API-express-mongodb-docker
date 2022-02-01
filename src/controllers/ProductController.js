import Product from "../models/Product";

class ProductController {

    async index(req, res) {
        const products = await Product.find();

        if (!products) {
            return res.status(400).json({error: "product not found"});
        }

        return res.json(products);
    }

    async store(req, res) {
        const {name, description, price, category} = req.body;

        const product = await Product.create({
            name, description, price, category
        });

        return res.json(product);
    }

    async update (req, res) {
        const {name, description, price, category} = req.body;
        const {id} = req.params;

        const product = await Product.findById(id);

        if (!product) {
            return res.status(400).json({error: "product not found"});
        }

        product.name = name;
        product.description = description;
        product.price = price;
        product.category = category;
        await product.save();

        return res.json(product);
    }

    async delete(req, res) {
        const {id} = req.params;

        const product = await Product.findById(id);

        if (!product) {
            return res.status(400).json({error: "product not found"});
        }

        await product.remove();

        return res.status(200).json({message: "Deleted"});
    }
}

export default new ProductController();