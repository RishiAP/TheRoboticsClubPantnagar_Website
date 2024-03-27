import mongoose from "mongoose";
const ContactSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    subject:{
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});
export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);