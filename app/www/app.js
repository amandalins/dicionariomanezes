// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('diciomane', ['ionic',
  'diciomane.pages.entry',
  'diciomane.pages.search',
  'diciomane.pages.dictionary',
  'diciomane.pages.home',
  'diciomane.svc.dictionary',
  'diciomane.svc.wordoftheday',
  'ngMaterial'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: 'pages/home/_home.html'
    })
    .state('entry', {
      url: '/entry/:id',
      templateUrl: 'pages/entry/_entry.html'
    })
    .state('dictionary', {
      url: '/dictionary',
      templateUrl: 'pages/dictionary/_dictionary.html'
    })
    .state('search', {
      url: '/search',
      templateUrl: 'pages/search/_search.html'
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
});
