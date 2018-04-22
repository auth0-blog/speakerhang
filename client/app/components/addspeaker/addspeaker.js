import angular from 'angular';
import addspeakerComponent from './addspeaker.component';
import speakerForm from '../speakerform/speakerform';

let addspeakerModule = angular.module('addspeaker', [
  speakerForm
])

.component('addSpeaker', addspeakerComponent)

.name;

export default addspeakerModule;
