import SpeakerlistModule from './speakerlist'
import SpeakerlistController from './speakerlist.controller';
import SpeakerlistComponent from './speakerlist.component';
import SpeakerlistTemplate from './speakerlist.html';

describe('Speakerlist', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SpeakerlistModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SpeakerlistController();
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
      expect(SpeakerlistTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SpeakerlistComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SpeakerlistTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SpeakerlistController);
      });
  });
});
