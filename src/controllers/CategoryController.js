import Category from "../models/Category";

class CategoryController {
    async store(req, res){
        const {name} = req.body;

        const category = await Category.create({
            name: name
        });

        return res.json(category);
    }
}

export default new CategoryController();