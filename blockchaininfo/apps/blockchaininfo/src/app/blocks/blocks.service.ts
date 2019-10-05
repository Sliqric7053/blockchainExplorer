import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { throwError, Observable, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Block, GetBlocksResults } from './models/blocks.model';

@Injectable({
  providedIn: 'root'
})
export class BlocksService {
  blockBaseUrl = 'api/blocks'; // URL to web api
  private hash$ = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  public getLatestBlocks(): Observable<Block[]> {
    return this.http.get<GetBlocksResults>(this.blockBaseUrl).pipe(
      tap(_ => console.log('getLatestBlocks')),
      map((results: GetBlocksResults) => results.blocks),
      catchError(this.handleError)
    );
  }

  public getBlockDetails(hash: string): Observable<Block> {
    return this.http.get<Block>(`${this.blockBaseUrl}/${hash}`).pipe(
      tap(_ => console.log('getBlockDetails')),
      catchError(this.handleError)
    );
  }

  public setHash(hash: string) {
    this.hash$.next(hash);
  }

  public getHash() {
    return this.hash$.value;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occured. Handle it accordingly
      console.error('An error occured:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what was wrong
      console.log(
        `Backend returned code ${error.status}, body was: ${error.status}`
      );
    }
    // return an observable wuth a user-facing error message
    return throwError('Something bad happened, please try again later.');
  }
}
