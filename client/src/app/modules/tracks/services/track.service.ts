import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';
import { TrackModel } from '@core/models/tracks.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  private readonly API_URL = environment.api;

  constructor(private http: HttpClient) {}

  private skipById(
    linstTracks: TrackModel[],
    id: number
  ): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const tracks = linstTracks.filter((track) => track._id !== id);
      resolve(tracks);
    });
  }

  getAllTracks$(): Observable<any> {
    return this.http.get(`${this.API_URL}/tracks`).pipe(
      tap((data) => console.log('🔴🔴🔴', data)),
      mergeMap(({ data }: any) => this.skipById(data, 2)),
      tap((data) => console.log('🆗🆗🆗', data)),
      catchError((error) => {
        console.log('🔴🔴🔴', error);
        return of(error);
      })
    );
  }

  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.API_URL}/tracks`).pipe(
      tap((data) => console.log('🔴🔴🔴', data)),
      mergeMap(({ data }: any) => this.skipById(data, 2)),
      tap((data) => console.log('🆗🆗🆗', data)),
      catchError((error) => {
        console.log('🔴🔴🔴', error);
        return of(error);
      })
    );
  }
}
