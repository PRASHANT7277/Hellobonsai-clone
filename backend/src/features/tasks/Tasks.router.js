const express = require( 'express' );
const authMiddleware = require( '../middlewares/auth.middleware' );
const Tasks = require( "./Tasks.model" );

const app = express.Router();


app.get( "/", authMiddleware, async ( req, res ) => {
    try {
        let task = await Tasks.find();
        res.send( task );
    } catch ( e ) {
        res.status( 500 ).send( e );
    }

} );
app.post( "/", authMiddleware, async ( req, res ) => {
    try {
        let task = await Tasks.create( { ...req.body } );
        res.send( task );
    } catch ( e ) {
        res.status( 500 ).send( e );
    }
} )
app.patch( "/:id", authMiddleware, async ( req, res ) => {
    try {
        let id = req.params;
        let task = await Tasks.findByIdAndUpdate( { id }, { ...req.body } );
        res.send( task );
    } catch ( e ) {
        res.status( 500 ).send( e );
    }
} );
app.delete( "/:id", authMiddleware, async ( req, res ) => {
    try {
        let id = req.params;
        let task = await Tasks.findByIdAndDelete( { id } );
        res.send( task );
    } catch ( e ) {
        res.status( 500 ).send( e );
    }
} )
module.exports = app;