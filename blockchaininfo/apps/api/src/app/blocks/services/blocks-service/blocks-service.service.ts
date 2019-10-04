import { Injectable, HttpService, NotFoundException } from '@nestjs/common';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class BlocksServiceService {
  constructor(private http: HttpService) {}

  latestBlocksUrl = 'https://blockchain.info/blocks?format=json';

  getLatestBlocks() {
    return this.http.get('https://blockchain.info/blocks?format=json').pipe(
      tap(_ => console.log('date')),
      map(response => response.data)
    );
  }

  getBlockDetails(hash: string) {
    const blockDetailUrl = `https://blockchain.info/rawblock/${hash}?format=jsonblockchain.info/blocks?format=json`;

    try {
      return this.http.get(blockDetailUrl).pipe(map(response => response.data));
    } catch (error) {
      throw new NotFoundException(
        `Could not find block details with hash ${hash}`
      );
    }
  }
}
