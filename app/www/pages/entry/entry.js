'use strict'
angular.module('diciomane.pages.entry',[])
  .controller('EntryCtrl', ['$stateParams','DictionarySvc',
    function($stateParams, dictionary) {

    var ctrl = this;

    this.verbeteID = $stateParams.id;

    dictionary.entry(this.verbeteID)
      .then(function(entry) {
        ctrl.entry = entry;
      });
  }]);
