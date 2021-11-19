import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TrackModel } from '@core/models/tracks.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly API_URL = environment.api;

  constructor(private http: HttpClient) { }


  getAllTracks$(): Observable<TrackModel[]> {
    return this.http.get(`${this.API_URL}/tracks`)
      .pipe(map(({ data }: any )=> data))
  }

  getAllRandom$(): Observable<TrackModel[]> {
    return this.http.get(`${this.API_URL}/tracks`)
      .pipe(map(({ data }: any )=> data.reverse()))
  }
}
