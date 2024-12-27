import { Routes } from '@angular/router';
import { PikSnapListComponent } from './pik-snap-list/pik-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SinglePikSnapComponent } from './single-pik-snap/single-pik-snap.component';

export const routes: Routes = [
    {path: 'piksnaps', component: PikSnapListComponent },
    {path: 'piksnap/:id', component: SinglePikSnapComponent },
    {path: '', component: LandingPageComponent }
];
