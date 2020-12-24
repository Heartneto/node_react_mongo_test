module.exports = app => {
    const users = require('../controllers/user.controller');
    let router = require('express').Router();

    router.post("/", users.add);

    router.get("/", users.getAll);

    router.get("/:id", users.getByID);

    router.put("/:id", users.updateByID);

    router.delete("/:id", users.deleteByID);

    app.use('/api/rest', router);
};