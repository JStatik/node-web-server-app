const hbs = require ( 'hbs' );

hbs.registerHelper( 'getYear', () => new Date().getFullYear() );
