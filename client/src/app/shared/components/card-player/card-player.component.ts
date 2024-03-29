import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css'],
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'big';
  @Input() track: TrackModel = {} as TrackModel;

  constructor(private _multimediaService: MultimediaService) {}

  ngOnInit(): void {}

  sendPlay(track: TrackModel): void {
    this._multimediaService.play$.emit(track);
  }
}
