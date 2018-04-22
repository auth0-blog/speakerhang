class SpeakerlistController {
  constructor(SpeakerService) {
    "ngInject";
    
    // This will keep the service instance across our class
    this.SpeakerService = SpeakerService;

    // this will hold our goatsList, it will be passed to the other components.
    this.speakers = [];
  }

    // This method will be called each time the component will be initialised,
    // In our case, it will be called for every page route change.
  $onInit() {
    this.speakers = this.SpeakerService.getAllSpeakers();
  }
}

export default SpeakerlistController;