const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
router.get('/', async (req, res) => {
    try {
        const tags = await Tag.findAll({
            include: {
                model: Product,
                through: {
                    attributes: []
                }
            }
        });
        res.json(tags)
    } catch (err) {
        res.status(500).json(err);
    }
});

// find a single tag by its `id`
router.get('/:id', async (req, res) => {
    try {
        const tag = await Tag.findByPk(req.params.id, {
            include: {
                model: Product,
                through: {
                    attributes: []
                }
            }
        });
        if (!tag) {
            return res.status(404).json(null);
        }
        res.json(tag);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', (req, res) => {
    // create a new tag
});

router.put('/:id', (req, res) => {
    // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
    // delete on tag by its `id` value
});

module.exports = router;
