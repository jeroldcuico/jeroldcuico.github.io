import mongoose, { Schema } from "mongoose";

const listSchema = new Schema(
    {
        title: String,
        description: String,
    },
    {
        timestamps: true,
    }
);

const Lists = mongoose.models.List || mongoose.model("List", listSchema);

export default Lists;