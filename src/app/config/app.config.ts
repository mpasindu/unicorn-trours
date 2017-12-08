import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  routes: {
    heroes: 'heroes',
    all: 'all',
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
"alterEgo": "RS:55000/-",
"description" : "\r\n\r\nHi, i have brand new wagon R for rent, \r\nReputed company exsucutive, managers personal use.\r\nFully loaded Fuel per litter = 17city limits Out station. = 20 per litter \r\nLong term basis minimum 1 month \r\nConditions apply",
"likes": 213,
"default": true
},
{
"id": 4,
"name": "Perodua axia",
"alterEgo": "RS:55000/-",
"likes": 981,
"description" : "\r\n\r\nPerodua axia for rent, \r\nReputed company exsucutive, managers personal use.\r\nLong term basis minimum 1 month \r\nConditions apply",
"default": true
},
{
"id": 1,
"name": "Alto 800",
"alterEgo": "RS:35000/-",
"likes": 1330,
"description" : "\r\n\r\nAlto 800 for rent, \r\nReputed company exsucutive, managers personal use.\r\nLong term basis minimum 1 month \r\nConditions apply",
"default": true
},

{
"id": 3,
"name": "wagon r j style 2015",
"alterEgo": "RS:55000/-",
"description" : "\r\n\r\nWagon R j style for rent, \r\nReputed company exsucutive, managers personal use.\r\nFully loaded Fuel per litter = 17city limits Out station. = 20 per litter \r\nLong term basis minimum 1 month \r\nConditions apply",
"likes": 222,
"default": true
}
]

};


