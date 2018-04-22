import template from './speakerform.html';
import controller from './speakerform.controller';
import './speakerform.scss';

let speakerformComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default speakerformComponent;
