import { Component, OnInit } from '@angular/core';
import { PikSnap } from '../models/pik-snap';
import { PikSnapComponent } from '../pik-snap/pik-snap.component';
import { PikSnapsService } from '../services/pik-snaps.service';

@Component({
  selector: 'app-pik-snap-list',
  imports:[PikSnapComponent],
  templateUrl: './pik-snap-list.component.html',
  styleUrl: './pik-snap-list.component.scss'
})
export class PikSnapListComponent implements OnInit{
  pikSnaps!: PikSnap[];

  mySnap! : PikSnap;

  constructor(private pikSnapsService: PikSnapsService){

  }

  ngOnInit(): void {

    this.pikSnaps = this.pikSnapsService.getPikSnaps();
  }
}
