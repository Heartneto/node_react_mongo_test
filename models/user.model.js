const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        nom: {type: String, required: true},
        prenom: {type: String},
        email: {type: String, required: true}
    },
    {timestamps: true}
);

userSchema.method("toJSON", function(){
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = mongoose.model('users', userSchema);