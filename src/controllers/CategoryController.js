import Category from "../models/Category";

class CategoryController {

    async index(req, res) {
        const categories = await Category.find();
        
        if (!categories) {
            return res.status(404).json({error: "category not found"});
        }

        return res.json(categories);
    }

    async store(req, res){
        const {name} = req.body;

        const category = await Category.create({
            name: name
        });

        return res.status(201).json(category);
    }

    async update (req, res) {
        const {id} = req.params;
        const {name} = req.body;

        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({error: "category not found"});
        }

        category.name = name;
        category.save();

        return res.status(200).json(category);
    }

    async delete(req, res) {
        const {id} = req.params;

        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({error: "category not found"});
        }

        category.remove();

        return res.status(200).json({message: "Deleted"});
    }
}

export default new CategoryController();