import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  dataTacksTrending$: Observable<TrackModel[]> = of([])

  constructor() {
    const {data}:any = (dataRaw as any).default;
    this.dataTacksTrending$ = of(data)
  }
}
