angular
  .module('app')
  .component('inputValidable', {
    templateUrl: 'input-validable.html',
    transclude: true,
    bindings: {
      validator: '<',
      label: '@',
      warning: '<'
    },
    controller: function() {
      var ctrl = this;

      ctrl.formGroupClass = function() {
        if (!ctrl.validator) return '';
        if (ctrl.hasWarning()) return 'has-warning';
        if (ctrl.isValid()) return 'has-success';
        if (ctrl.hasError()) return 'has-error';
      }

      ctrl.hasWarning = function() {
        return !!ctrl.warning;
      }

      ctrl.hasError = function() {
        return !!ctrl.validator && !ctrl.hasWarning() && !ctrl.validator.$valid && ctrl.validator.$dirty;
      }

      ctrl.isValid = function() {
        return !ctrl.validator || (!ctrl.hasWarning() && ctrl.validator.$valid && ctrl.validator.$dirty);
      }
    }
  });
