import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../data/tracks.json';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css'],
})
export class PlayListBodyComponent implements OnInit {
  trackList: TrackModel[] = [];
  optionSort: { property: string | null; order: string } = {
    property: null,
    order: 'asc',
  };

  constructor() {}

  ngOnInit(): void {
    const { data } = (dataRaw as any).default;
    this.trackList = data;
  }

  changeOrder(property: string | null): void {
    const { order } = this.optionSort;
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc',
    };

    console.log(this.optionSort);
  }
}
