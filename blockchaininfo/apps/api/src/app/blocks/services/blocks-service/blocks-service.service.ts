import { Injectable, HttpService, NotFoundException } from '@nestjs/common';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Block } from '@blockchaininfo/api-interfaces';

@Injectable()
export class BlocksServiceService {
  constructor(private http: HttpService) {}

  latestBlocksUrl = 'https://blockchain.info/blocks?format=json';

  getLatestBlocks(): Observable<Block[]> {
    return this.http
      .get(this.latestBlocksUrl)
      .pipe(map(response => response.data));
  }

  getBlockDetails(hash: string) {
    const blockDetailUrl = `https://blockchain.info/rawblock/${hash}?format=json`;

    try {
      return this.http.get(blockDetailUrl).pipe(map(response => response.data));
    } catch (error) {
      throw new NotFoundException(
        `Could not find block details with hash ${hash}`
      );
    }
  }
}
