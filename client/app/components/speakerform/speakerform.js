import angular from 'angular';
import speakerformComponent from './speakerform.component';

let speakerformModule = angular.module('speakerform', [])

.component('speakerForm', speakerformComponent)

.name;

export default speakerformModule;
