import {
  ABCIApplication,
  Request,
  RequestProcessor,
  RequestType,
  Response,
  ResponseApplySnapshotChunk,
  ResponseBeginBlock,
  ResponseCheckTx,
  ResponseCommit,
  ResponseDeliverTx,
  ResponseEndBlock,
  ResponseFlush,
  ResponseInfo,
  ResponseInitChain,
  ResponseListSnapshots,
  ResponseLoadSnapshotChunk,
  ResponseOfferSnapshot,
  ResponseQuery,
  ResponseSetOption,
} from '@moby/abci';

export class Application implements ABCIApplication {
  applySnapshotChunk(req: Request): Response {
    return new Response({
      value: {
        case: RequestType.applySnapshotChunk,
        value: new ResponseApplySnapshotChunk(),
      },
    });
  }

  beginBlock(req: Request): Response {
    return new Response({
      value: {
        case: RequestType.beginBlock,
        value: new ResponseBeginBlock(),
      },
    });
  }

  checkTx(req: Request): Response {
    return new Response({
      value: {
        case: RequestType.checkTx,
        value: new ResponseCheckTx(),
      },
    });
  }

  commit(req: Request): Response {
    return new Response({
      value: {
        case: RequestType.commit,
        value: new ResponseCommit(),
      },
    });
  }

  deliverTx(req: Request): Response {
    return new Response({
      value: {
        case: RequestType.deliverTx,
        value: new ResponseDeliverTx(),
      },
    });
  }

  echo(req: Request): Response {
    const res = new Response();
    return res;
  }

  endBlock(req: Request): Response {
    return new Response({
      value: {
        case: RequestType.endBlock,
        value: new ResponseEndBlock(),
      },
    });
  }

  flush(req: Request): Response {
    return new Response({
      value: {
        case: RequestType.flush,
        value: new ResponseFlush(),
      },
    });
  }

  info(req: Request): Response {
    return new Response({
      value: {
        case: RequestType.info,
        value: new ResponseInfo({
          version: '1.0.0',
          lastBlockHeight: 0n,
          lastBlockAppHash: Buffer.from(''),
        }),
      },
    });
  }

  initChain(req: Request): Response {
    return new Response({
      value: {
        case: RequestType.initChain,
        value: new ResponseInitChain(),
      },
    });
  }

  listSnapshots(req: Request): Response {
    return new Response({
      value: {
        case: RequestType.listSnapshots,
        value: new ResponseListSnapshots(),
      },
    });
  }

  loadSnapshotChunk(req: Request): Response {
    return new Response({
      value: {
        case: RequestType.loadSnapshotChunk,
        value: new ResponseLoadSnapshotChunk(),
      },
    });
  }

  offerSnapshot(req: Request): Response {
    return new Response({
      value: {
        case: RequestType.offerSnapshot,
        value: new ResponseOfferSnapshot(),
      },
    });
  }

  query(req: Request): Response {
    return new Response({
      value: {
        case: RequestType.query,
        value: new ResponseQuery(),
      },
    });
  }

  setOption(req: Request): Response {
    return new Response({
      value: {
        case: RequestType.setOption,
        value: new ResponseSetOption(),
      },
    });
  }

  processors: Map<string, RequestProcessor>;

  constructor() {
    this.processors = new Map<string, RequestProcessor>([
      [RequestType.applySnapshotChunk, this.applySnapshotChunk],
      [RequestType.beginBlock, this.beginBlock],
      [RequestType.checkTx, this.checkTx],
      [RequestType.commit, this.commit],
      [RequestType.deliverTx, this.deliverTx],
      [RequestType.echo, this.echo],
      [RequestType.endBlock, this.endBlock],
      [RequestType.flush, this.flush],
      [RequestType.info, this.info],
      [RequestType.initChain, this.initChain],
      [RequestType.listSnapshots, this.listSnapshots],
      [RequestType.loadSnapshotChunk, this.loadSnapshotChunk],
      [RequestType.offerSnapshot, this.offerSnapshot],
      [RequestType.query, this.query],
      [RequestType.setOption, this.setOption],
    ]);
  }

  processMessage = (req: Request): Response => {
    console.log(req);
    if (!req.value.case || !this.processors.has(req.value.case)) {
      throw new Error(`Invalid request type ${req.value.case}`);
    }
    // console.log(`Processing message ${req.value.case}`, req.value.value);
    const processor = this.processors.get(req.value.case);
    if (!processor) {
      throw new Error(`Processor for ${req.value.case} not found`);
    }

    const res = processor(req);
    console.log(res);
    return res;
  };
}
