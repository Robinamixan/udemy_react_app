const express = require('express');

const { getAll, add } = require('../repositories/orders.js');
const { isValidText } = require('../util/validation');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const orders = await getAll();
        res.json({ orders: orders });
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    const data = req.body;
    let errors = {};

    if (!isValidText(data.userData.name)) {
        errors.name = 'Invalid title.';
    }

    if (!isValidText(data.userData.street)) {
        errors.street = 'Invalid street.';
    }

    if (!isValidText(data.userData.postal)) {
        errors.postal = 'Invalid postal code.';
    }

    if (!isValidText(data.userData.city)) {
        errors.city = 'Invalid city name.';
    }

    if (Object.keys(errors).length > 0) {
        return res.status(422).json({
            message: 'Adding the mael failed due to validation errors.',
            errors,
        });
    }

    try {
        await add(data);
        res.status(201).json({ message: 'Order saved.', order: data });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
