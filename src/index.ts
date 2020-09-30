import fastify from 'fastify';

const server = fastify( { logger: true } );

server.get( '/ping', async ( request, reply ) => {

    return 'pong\n';

} );

server.listen( 8080, ( err, address ) => {

    if ( err ) {

        server.log.fatal( { error: `Fail to start Server at ${address}` } )
        server.log.fatal( { error: err } );
        process.exit( 1 );

    }

} );

