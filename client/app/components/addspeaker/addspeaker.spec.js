import AddspeakerModule from './addspeaker'
import AddspeakerController from './addspeaker.controller';
import AddspeakerComponent from './addspeaker.component';
import AddspeakerTemplate from './addspeaker.html';

describe('Addspeaker', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AddspeakerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AddspeakerController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(AddspeakerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = AddspeakerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AddspeakerTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AddspeakerController);
      });
  });
});
