import { Routes } from '@angular/router';
import { PikSnapListComponent } from './pik-snap-list/pik-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    {path: 'piksnaps', component: PikSnapListComponent },
    {path: '', component: LandingPageComponent }

];
