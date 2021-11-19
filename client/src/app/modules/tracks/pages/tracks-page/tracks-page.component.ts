import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksRandom: TrackModel[] = []
  tracksTrending: TrackModel[] = []

  listObservers: Array<Subscription> = []

  constructor(private _trackService: TrackService) { }

  ngOnInit(): void {
    this._trackService.getAllTracks$().subscribe(
      (tracks: TrackModel[]) => {
        this.tracksTrending = tracks
      })
      
      this._trackService.getAllRandom$().subscribe(
        (tracks: TrackModel[]) => {
          this.tracksRandom = tracks
        })
  }

  ngOnDestroy(): void {
    
  }
}
