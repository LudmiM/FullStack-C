import mongoose, { Schema, Document } from "mongoose";

export type TaskType = Document & {
    title: string
    description: string
    status: string
}

const TaskSchema: Schema = new Schema({
    title: {
        type: String,
        require: true,
        trim: true,
    },
    description: {
        type: String
    },
    status: { type: String, enum: ['completed', 'pending', 'false'], default: 'false' }
}) 

const Task = mongoose.model<TaskType>('Task', TaskSchema)

export default Task;