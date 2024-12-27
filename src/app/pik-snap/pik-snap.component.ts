import { Component, Input, OnInit } from '@angular/core';
import { PikSnap } from '../models/pik-snap';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { PikSnapsService } from '../services/pik-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pik-snap',
  imports: [NgStyle, NgClass, TitleCasePipe, DatePipe ],
  templateUrl: './pik-snap.component.html',
  styleUrl: './pik-snap.component.scss'
})
export class PikSnapComponent implements OnInit{
  @Input() pikSnap! : PikSnap;
  isSnap! : boolean;
  emote! : string;

  constructor(private pikSnapService: PikSnapsService,
              private router: Router) {}

  ngOnInit(): void {
     this.isSnap = false;
     this.emote = "🐒"
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

  onViewPikSnap() {
    this.router.navigateByUrl(`piksnap/${this.pikSnap.id}`)
  }
}
