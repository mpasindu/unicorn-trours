import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';

import {NavigationEnd, Router} from '@angular/router';
import {AppConfig} from './config/app.config';
import {MatSnackBar} from '@angular/material';

declare const Modernizr;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  constructor(private translateService: TranslateService,
              private title: Title,
              private meta: Meta,
              private snackBar: MatSnackBar,
              private router: Router) {

    this.translateService = translateService;
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');

    this.title.setTitle('Unicorn Tours');
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        switch (event.urlAfterRedirects) {
          case '/':
            this.meta.updateTag({
              name: 'description',
              content: 'Unicorn Tours'
            });
            break;
          case '/' + AppConfig.routes.heroes:
            this.title.setTitle('Vehicle list');
            this.meta.updateTag({
              name: 'description',
              content: 'Unicorn Tours'
            });
            break;
        }
      }
    });

    this.checkBrowserFeatures();
  }

  checkBrowserFeatures() {
    let supported = true;
    for (let feature in Modernizr) {
      if (Modernizr.hasOwnProperty(feature) &&
        typeof Modernizr[feature] === 'boolean' && Modernizr[feature] === false) {
        supported = false;
        break;
      }
    }

    if (!supported) {
      this.translateService.get(['updateBrowser']).subscribe((texts) => {
        this.snackBar.open(texts['updateBrowser'], 'OK');
      });
    }

    return supported;
  }
}
