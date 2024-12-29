import mongoose, { Schema, Document } from "mongoose";

export type TaskType = Document & {
    title: string
    description: string
    completed: boolean;
}

const TaskSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
}
)

const Task = mongoose.model<TaskType>('Task', TaskSchema)

export default Task;