import { Schema, model, Document } from 'mongoose';

const characterSchema = new Schema({
    name: { type: String, required: true },
    alterEgo: { type: String, required: true },
    role: { type: String, required: true },
});

characterSchema.methods.toJSON = function() {
    const { __v, _id, ...user } = this.toObject();
    user.uid = _id;
    return user;
}

export const characterModel = model('Character', characterSchema);