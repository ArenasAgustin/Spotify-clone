import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
