import connectDB from "./_db_connect";
import Contact from "./Schema/Contact.js";
export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await connectDB();
            await Contact.create(req.body);
            return res.status(200).json({status:true});
        } catch (error) {
            return res.status(500).json({status:false,error});
        }
    } else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}