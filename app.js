const express = require( 'express' );
const hbs = require ( 'hbs' );
require( './helpers/hbs' );
const app = express();

const port = process.env.PORT || 4000;

app.use( express.static( `${ __dirname }/public` ) );

/********************************************************************************* HBS *********************************************************************************/
hbs.registerPartials( `${ __dirname }/views/partials` );
app.set( 'view engine', 'hbs' );

/******************************************************************************** SERVER ********************************************************************************/
app.listen( port, () => {
    console.log( `Servidor corriendo en puerto ${ port }` );
} );

/******************************************************************************** RUTAS ********************************************************************************/
app.get( '/', ( req, res ) => {
    res.render( 'home', {
        name: 'Pepe Ruiz'
    } );
} );

app.get( '/about', ( req, res ) => {
    res.render( 'about' );
} );

app.get( '*', ( req, res ) => {
    res.render( 'home', {
        name: 'Pepe Ruiz'
    } );
} );
