import { Injectable } from "@angular/core";
import { PikSnap } from "../models/pik-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn: 'root'
})

export class PikSnapsService {
    private pikSnaps: PikSnap[] = [
        new PikSnap (
          'Monstre',
          'https://img.freepik.com/photos-gratuite/creature-illustrant-grinch_23-2151030850.jpg',
          '12m de haut, 5m de large',
          new Date(),
          10
          ),
        new PikSnap (
          'Monstre 2',
          "https://img.freepik.com/photos-gratuite/dessin-monstre-dents-dessin-anime_1409-6253.jpg?semt=ais_hybrid",
          "Petit monstre tout bleu",
          new Date(),
          150
        ).withLocation('Dans la rue'),
        new PikSnap (
          'Monstre 3',
          "https://img.freepik.com/photos-premium/predateur-ocean-photo-libre-fond-hd_915071-94407.jpg?semt=ais_hybrid",
          "Monstre aquatique",
          new Date(),
          6
        )
  
      ];

      getPikSnaps(): PikSnap[] {
        return [...this.pikSnaps];
      }

      getPikSnapById(pikSnapId: string): PikSnap{
        const foundPikSnap : PikSnap | undefined = this.pikSnaps.find(pikSnap => pikSnap.id === pikSnapId);
        if (!foundPikSnap) {
            throw new Error('PikSnap not found');
        }
        return foundPikSnap
      }

      snapPikSnapById(pikSnapId: string, snapType: SnapType): void{
        const pikSnap : PikSnap = this.getPikSnapById(pikSnapId);
        pikSnap.snap(snapType);
      }
}