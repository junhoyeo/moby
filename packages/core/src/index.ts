import { createABCIServer } from '@moby/abci';

import { processMessage } from './message-processor';

const app = {
  processMessage,
};

const server = createABCIServer(app);
server.listen(26658);
