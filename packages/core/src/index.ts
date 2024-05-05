import { ABCIServer } from '@moby/abci';

var appServer = new ABCIServer();
appServer.server.listen(26658);
