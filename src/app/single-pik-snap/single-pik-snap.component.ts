import { Component, OnInit } from '@angular/core';
import { PikSnap } from '../models/pik-snap';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { PikSnapsService } from '../services/pik-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-pik-snap',
  imports: [NgStyle, NgClass, TitleCasePipe, DatePipe, RouterLink ],
  templateUrl: './single-pik-snap.component.html',
  styleUrl: './single-pik-snap.component.scss'
})
export class SinglePikSnapComponent implements OnInit{
  pikSnap! : PikSnap;
  isSnap! : boolean;
  emote! : string;

  constructor(private pikSnapService: PikSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.prepareInterface();
    this.getPikSnap();
  }

  snap(): void{
    this.isSnap = false;
    this.pikSnapService.snapPikSnapById(this.pikSnap.id, 'snap');
    this.emote = "🐒";
  }

  unSnap(): void{
    this.isSnap = true
    this.pikSnapService.snapPikSnapById(this.pikSnap.id, 'unsnap');
    this.emote = "🦍"
  }

  onSnap(): void {
    if (this.isSnap) {
      this.snap()
    } else {
      this.unSnap()
    }
  }

  private prepareInterface() {
    this.isSnap = false;
    this.emote = "🐒";
  }

  private getPikSnap() {
    const pikSnapId = this.route.snapshot.params['id'];
    this.pikSnap = this.pikSnapService.getPikSnapById(pikSnapId);
  }
}
