const mongoose = require( "mongoose" );

const tasksSchema = mongoose.Schema( {
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "client", required: true },
    title: { type: String, required: true },
    project: { type: String },
    client: { type: String },
    duedate: { type: String },
    time: { type: String },
    status: { type: String }

} );

const tasks = mongoose.model( "task", tasksSchema );

module.exports = tasks;