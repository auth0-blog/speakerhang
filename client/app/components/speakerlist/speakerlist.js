import angular from 'angular';
import speakerlistComponent from './speakerlist.component';

let speakerlistModule = angular.module('speakerlist', [])

.component('speakerList', speakerlistComponent)

.name;

export default speakerlistModule;
