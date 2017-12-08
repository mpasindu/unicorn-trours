import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HeroRoutingModule} from './heroes-routing.module';
import {SharedModule} from '../shared/modules/shared.module';

import {HeroListComponent, RemoveHeroDialogComponent} from './hero-list/hero-list.component';
import {HeroService} from './shared/hero.service';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes.component';
// import {Angular2ImageGalleryModule } from 'angular2-image-gallery'
// import { GalleryComponent } from './gallery/gallery.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HeroRoutingModule,
    ReactiveFormsModule,
    // Angular2ImageGalleryModule 
  ],
  declarations: [
    HeroesComponent,
    HeroListComponent,
    RemoveHeroDialogComponent,
    HeroDetailComponent,
    // GalleryComponent
    
  ],
  entryComponents: [
    RemoveHeroDialogComponent
  ],
  providers: [
    HeroService
  ]
})

export class HeroesModule {
}

