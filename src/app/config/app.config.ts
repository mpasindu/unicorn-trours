import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  routes: {
    heroes: 'heroes',
    error404: '404'
  },
  endpoints: {
    heroes: 'https://nodejs-example-app.herokuapp.com/heroes'
  },
  votesLimit: 3,
  topHeroesLimit: 4,
  snackBarDuration: 3000,
  repositoryURL: 'https://github.com/Ismaestro/angular5-example-app',
  heroess : [
{
"id": 2,
"name": "Wagon r",
"alterEgo": "Uni wadda fas df  fas dfasdfasdf  fas asdfasd fsad dfa s \n fasdfas  fa",
"likes": 213,
"default": true
},
{
"id": 1666,
"name": "pasindu",
"alterEgo": "pasindu",
"likes": 0,
"default": false
},
{
"id": 1,
"name": "Alto 800",
"alterEgo": "Uni batta",
"likes": 1330,
"default": true
},

{
"id": 3,
"name": "wagon r j style 2015",
"alterEgo": "Uni style",
"likes": 222,
"default": true
}
]

};


