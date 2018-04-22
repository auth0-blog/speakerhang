import template from './speakerlist.html';
import controller from './speakerlist.controller';
import './speakerlist.scss';

let speakerlistComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default speakerlistComponent;
