var app = angular.module('app', ['pascalprecht.translate']);

app.config(function($translateProvider) {

    $translateProvider
      .translations('en', {
        "title": "Car",
        "description": "A motor vehicle with four wheels; usually propelled by an internal combustion engine."
      })
      .translations('zh-cn', {
        "title": "汽车",
        "description": "机动车与四个车轮;通常由内燃机驱动。"
      });

    $translateProvider.preferredLanguage('en');

});

app.controller('ctrl', [
  '$scope', '$translate',
  function($scope, $translate) {
    $scope.changeLang = function changeLangFn(langKey) {
      $translate.use(langKey);
    };
  }
]);
