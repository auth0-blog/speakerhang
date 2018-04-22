import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import AppComponent from './app.component';
import NavBarComponent from './components/navbar/navbar';
import SpeakerListComponent from './components/speakerlist/speakerlist';
import AddSpeakerComponent from './components/addspeaker/addspeaker';
import SpeakerService from './services/SpeakerService';
import 'normalize.css';
import 'skeleton.css/skeleton.css';
import './app.scss';

angular.module('app', [
    uiRouter,
    NavBarComponent,
    SpeakerListComponent,
    AddSpeakerComponent,
  ])
  .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
    "ngInject";

    // Define our app routing, we will keep our layout inside the app component
    // The layout route will be abstract and it will hold all of our app views
    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            template: '<app></app>'
        })

        // Dashboard page to contain our goats list page
        .state('home', {
            url: '/home',
            template: '<h4>The Home of Speakers in the Developer Community</h4>'
        })

        // Speaker page to contain list of speakers
        .state('speakers', {
            url: '/speakers',
            template: '<speaker-list></speaker-list>'
        })

        // Create route for our goat listings creator
        .state('addspeaker', {
            url: '/add-speaker',
            template: '<add-speaker></add-speaker>'
        });

   // Default page for the router
   $urlRouterProvider.otherwise('/home');
  })

  .component('app', AppComponent)
  .factory('SpeakerService', SpeakerService);
