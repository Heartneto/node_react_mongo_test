const { Mongoose } = require('mongoose');

const Users = require('../models/user.model');

exports.add = (req, res) => {
    delete req.body._id;
    const user = new Users({
        ...req.body
    });
    user.save()
    .then(data => {res.send(data);})
    .catch(err => {res.status(500).send({
        message: err.message || "Error while adding user."
        });
    });
};

exports.getAll = (req, res) => {
    Users.find()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send({message: err.message || "Error while retrieving users"}));
};

exports.getByID = (req, res) => {
    const id = req.params.id;
    Users.findById(id)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(404).send({message:"No User found with id " + id}))
};

exports.updateByID = (req, res) => {
    const id = req.params.id;
    Users.findByIdAndUpdate(id, { ...req.body, id })
    .then(data => res.status(200).send({message:"User updated successfully"}))
    .catch(err => res.status(400).send({message: err.message || "Error while updating user with id " + id}))
};

exports.deleteByID = (req, res) => {
    const id = req.params.id;
    Users.findByIdAndDelete(id)
    .then(data => res.send({message:"User deleted successfully"}))
    .catch(err => res.status(400).send({message: err.message || "Error while deleteing user with id " + id}))
};