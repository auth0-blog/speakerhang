class SpeakerformController {
  constructor($state, SpeakerService) {
    "ngInject";

    this.$state       = $state;
    this.SpeakerService = SpeakerService;

    this.speaker = {};
  }

  // will handle the form submission,
  // validates the required field and then adds the goat to the service.
  // once added, we will go to the next page.
  addSpeaker() {
    if(!this.speaker.name) return alert('Speaker Name is Required');
    if(!this.speaker.noOfConf) return alert('No. Of Conferences Attended is required');
    if(!this.speaker.favConf) return alert('Favorite Conference So Far is required');
    if(!this.speaker.favProgrammingQuote) return alert('Favorite Programming Quote is required');

    this.SpeakerService.addASpeaker(this.speaker);

    // reset the form
    this.speaker = {};

    // go to home page, to see our entry
    this.$state.go('speakers');
  }
}

export default SpeakerformController;
