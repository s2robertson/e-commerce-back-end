const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
router.get('/', async (req, res) => {
    try {
        const categories = await Category.findAll({
            include: Product
        });
        res.json(categories);
    } catch (err) {
        res.status(500).json(err);
    }
});

// find one category by its `id` value
router.get('/:id', async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id, {
            include: Product
        });
        res.json(category);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', (req, res) => {
    // create a new category
});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
});

module.exports = router;
