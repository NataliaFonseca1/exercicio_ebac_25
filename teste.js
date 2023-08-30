"use strict";

var alunos = [{
  nome: "Laura",
  nota: "10"
}, {
  nome: "joão",
  nota: "5"
}, {
  nome: "marcia",
  nota: "6"
}, {
  nome: "afonso",
  nota: "3"
}, {
  nome: "lucas",
  nota: "2"
}];
var maiorNota = alunos.filter(function (item) {
  return item.nota >= 5;
});
console.log(maiorNota);