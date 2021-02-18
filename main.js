let pulsar = document.getElementById('pulsar');

pulsar.addEventListener('click', e=>{
	ahorroDiezmo();
})

function ahorroDiezmo(){
	
	//gastoTotal es el 60%
	let gastoTotal = prompt('Escribe (en numero) el total de tus gastos');
	
		if (gastoTotal != '') {
			
			if (gastoTotal != null){
				
				let sesentaX100 = parseInt(gastoTotal);
				let cuarentaX100 = (sesentaX100 / 3) * 2;
				
				let ahorro = (cuarentaX100 / 4) * 3;
				let diezmo = cuarentaX100 / 4;
			
				let total = sesentaX100 + cuarentaX100;
			
				alert('Tienes esta cantidad en gastos: S/' + sesentaX100 + ', necesitas ganar S/' + total + ' porque tu ahorro tiene que ser S/' + ahorro + ' y tu diezmo de S/' + diezmo + '. Si consigues incrementar tus ingresos asta obtener S/' + total + ' podras pagar tus gastos , podras ahorrar lo necesario (almenos un 30%) y podras pagar tu diezmo sin que te falte dinero');
			} else {
			
				alert('Debes de ingresar algun numero. Ejemplo: 53');
			}
			
		} else{
			
			alert('Debes de ingresar algun numero. Ejemplo: 53');
		}
	
}