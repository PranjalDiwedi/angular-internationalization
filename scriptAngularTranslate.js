var translationsEN = {
  HEADLINE: 'This is a test module',
  PARAGRAPH: 'Awesome feature!',
  PASSED_AS_TEXT: 'I just loved it!',
  PASSED_AS_ATTRIBUTE: 'Its cool',
  PASSED_AS_INTERPOLATION: 'I am beginner',
  VARIABLE_REPLACEMENT: 'Hi {{name}}',
  MISSING_TRANSLATION: 'I am not translated...',
  BUTTON_LANG_ES: 'Spanish',
  BUTTON_LANG_EN: 'English'
};

var translationsES= {
  HEADLINE: 'Se trata de un módulo de prueba',
  PARAGRAPH: 'característica impresionante!',
  PASSED_AS_TEXT: 'simplemente me encantó!',
  PASSED_AS_ATTRIBUTE: 'Es genial',
  PASSED_AS_INTERPOLATION: 'soy principiante',
  VARIABLE_REPLACEMENT: 'Hi {{name}}',
  // MISSING_TRANSLATION is ... missing :)
  BUTTON_LANG_ES: 'Espanol',
  BUTTON_LANG_EN: 'Inglés'
};

var app = angular.module('appAngularTranslate', ['pascalprecht.translate']);

app.config(['$translateProvider', function ($translateProvider) {
  // add translation tables
  $translateProvider.translations('en', translationsEN);
  $translateProvider.translations('es', translationsES);
  $translateProvider.preferredLanguage('en');
  $translateProvider.fallbackLanguage('en');
}]);

app.controller('CtrlAngularTranslate', ['$translate', '$scope', function ($translate, $scope) {

  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
}]);