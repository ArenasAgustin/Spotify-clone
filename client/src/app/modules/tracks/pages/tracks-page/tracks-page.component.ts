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

  listObserbers: Array<Subscription> = []

  constructor(private _trackService: TrackService) { }

  ngOnInit(): void {
    const obserbableTrending = this._trackService.dataTacksTrending$
      .subscribe(response => {
        this.tracksTrending = response
      })

    this.listObserbers = [obserbableTrending]
  }

  ngOnDestroy(): void {
    this.listObserbers.forEach(obs => obs.unsubscribe())
  }
}
