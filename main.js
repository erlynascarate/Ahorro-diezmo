let gasto1 = prompt('Escribe en numero tu primer gasto');
let gasto2 = prompt('Escribe en numero tu segundo gasto');
let gasto3 = prompt('Escribe en numero tu tercer gasto');
let gasto4 = prompt('Escribe en numero tu cuarto gasto');
let gasto5 = prompt('Escribe en numero tu quinto gasto');
let gasto6 = prompt('Escribe en numero tu sexto gasto');
let gasto7 = prompt('Escribe en numero tu setimo gasto');

let sesentaX100 = parseInt(gasto1) + parseInt(gasto2) + parseInt(gasto3) + parseInt(gasto4) + parseInt(gasto5) + parseInt(gasto6) + parseInt(gasto7);
let cuarentaX100 = (sesentaX100 / 3) * 2;

let ahorro = (cuarentaX100 / 4) * 3;
let diezmo = cuarentaX100 / 4;

let total = sesentaX100 + cuarentaX100;

alert('Tienes esta cantidad: S/' + sesentaX100 + ', necesitas ganar S/' + total + ' porque tu ahorro tiene que ser S/' + ahorro + ' y tu diezmo de S/' + diezmo + '. Si consigues incrementar tis ingresos asta obtener S/' + total + ' podras pagar tus gastos , podras ahorrar lo necesario (almenos un 30%) y podras pagar tu diezmo sin que te falte dinero');