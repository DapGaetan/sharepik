import { SnapType } from "./snap-type.type";

export class PikSnap{

    location?: string;
    id: string;


    constructor(public title: string,
                public imageUrl: string,
                public description: string,
                public createdAt: Date,
                public snaps: number) {
        this.id = crypto.randomUUID().substring(0, 8);
        }

    addSnap(): void {
        this.snaps++;
    }

    removeSnap(): void {
        this.snaps--;
    }

    snap(snapType: SnapType) {
      if (snapType === 'snap') {
        this.addSnap();
      }  
      else if(snapType == 'unsnap'){
        this.removeSnap();
      }
    }

    setLocation(location: string): void {
        this.location = location;
    }

    withLocation(location: string): PikSnap{
        this.setLocation(location);
        return this;
    }
}
