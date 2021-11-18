import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TracksModule } from '@modules/tracks/tracks.module';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    "_id": 7,
    "name": "50 Cent - Candy Shop (feat. Olivia)",
    "album": "50 Cent",
    "cover": "https://i.scdn.co/image/ab67616d0000b27391f7222996c531b981e7bb3d",
    "artist": {
      "name": "50 Cent",
      "nickname": "50 Cent",
      "nationality": "US"
    },
    "url": "http://localhost:3000/track-6.mp3"
  }

  listObserbers: Subscription[] = []

  constructor(private _multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const obserber1: Subscription = this._multimediaService.play$.subscribe((track: TracksModule) => {})

    this.listObserbers = [obserber1]
  }

  ngOnDestroy(): void {
    this.listObserbers.forEach(obserber => {
      obserber.unsubscribe()
    })
  }
}
