angular
  .module('whatsapp', [
    'ionic',
    'angular-meteor',
    'angularMoment',
    'whatsapp.controllers'
  ])

  .run(function ($state, $rootScope) {
  Parse.initialize('HJugorBHecbRQn2JA1PFxpOpHcdoAHTaaQhYfLc2', 'h5okbpZ7mLXIwdb1W7zF60upMtLHzvfJpRpHIubo');
  var currentUser = Parse.User.current();
  $rootScope.user = null;
  $rootScope.isLoggedIn = false;

  if (currentUser) {
    $rootScope.user = currentUser;
    $rootScope.isLoggedIn = true;
    $state.go('tab.chats');
  }
});  