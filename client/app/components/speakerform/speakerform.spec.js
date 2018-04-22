import SpeakerformModule from './speakerform'
import SpeakerformController from './speakerform.controller';
import SpeakerformComponent from './speakerform.component';
import SpeakerformTemplate from './speakerform.html';

describe('Speakerform', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SpeakerformModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SpeakerformController();
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
      expect(SpeakerformTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SpeakerformComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SpeakerformTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SpeakerformController);
      });
  });
});
