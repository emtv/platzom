const expect = require('chai').expect

//Aqui va a bucar el archivo de package.json y leerá el archivo main.
const platz = require('..').default

//Describir los test

describe('#platzom', function(){

	//Se inicia el test con el método <it> y luego se ejecuta la función a probar.

	it('Si la palabra termina en "ar", se le quitan esos dos caracteres', function(){
		const translation = platz('Programar')
		//Aqui se escribe el resultado esperado de la función. 
		expect(translation).to.equal('Program')
	})

	it('Si la palabra inicia con Z, se le añade "pe" al final', function(){
		const translation = platz('Zorro')
		expect(translation).to.equal('Zorrope')
	})

	it('Si la palabra traducida tiene mas de 10 letras se parte y seune con un guion.', function(){
		const translation = platz('abecedario')
		expect(translation).to.equal('abece-dario')
	})


})