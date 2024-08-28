/* 1) Crie uma classe para representar pessoas. 
Para cada pessoa teremos os atributos NOME, PESO e ALTURA. 
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Inicie uma pessoa chamada JOSÉ que tenha 70KG de PESO e 1,75 de ALTURA pessa a José para dizer o valor do seu IMC.
IMC em adultos (Condição):
- Abaixo de 18,5, abaixo do peso.
- Entre 18,5 e 25, peso normal.
- Entre 25 e 30, acima do peso.
- Entre 30 a 40, obeso.
- Acima de 40, obesidade morbida. 
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

}
calcularImc(){
    return this.peso / (this.altura * this.altura);

}
classificarImc(){
   const imc = this.calcularImc();
   if (imc <= 18.5) {
    return ("Abaixo do peso.");
}else if (imc > 18.5 && imc <= 25){
    return ("Peso normal.");
}else if (imc > 25 && imc <= 30){
    return ("Acima do peso.");
}else if (imc > 30 && imc <= 40){
    return ("Obeso");
}else {
    return ("Obeso Morbido");

}
}
}
const jose = new Pessoa ('José', 70, 1.75);
console.log(jose.classificarImc());