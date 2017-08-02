'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platz;

//Esta función se exporta con el nombre de Platzom

function platz(str) {
  var translation = str;

  //Si la palabra termina en "ar", se le quitan esos dos caracteres
  //Aqui preguntamos 2 cosas, 1 q la palabra este en miniscula y luego evaluamos si es que termina en ar.
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }

  //Si la palabra inicia con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }

  //Si la palabra traducida tiene mas de 10 letras se parte y seune con un guion.
  var length = translation.length;
  if (translation.length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = firstHalf + '-' + secondHalf;
  }

  return translation;
}