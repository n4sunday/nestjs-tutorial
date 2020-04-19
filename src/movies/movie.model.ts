import * as mongoose from 'mongoose'

export const MovieSchema = new mongoose.Schema({
    title: { type: String, request: true },
    rank: { type: Number, request: true },
    distributor: { type: String, request: true },
    gross: { type: Number, request: true },
})

export interface Movie extends mongoose.Document {
    id: string
    title: string
    rank: number
    distributor: string
    gross: number
}