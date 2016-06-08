angular
  .module('app', [])
  .controller('AppController', function() {
    var ctrl = this;
    ctrl.newWine = {};

    ctrl.save = function() {
      console.log('New order', ctrl.newWine);
      ctrl.warning = 'Oups';
    }
  });
