nom=prompt("Pon tu nombre");
console.log("El nombre del usuario es:",nom);
preg1=prompt("Bienvenido/a al cuestionario sobre las Olimpíadas.¿Cual es tu nombre?");
console.log("Mi nombre es:",preg1);
preg2=prompt("1.¿Cuándo se realizará la inauguración de las Olimpiadas?\nA:Lunes 02 de octubre\nB:Viernes 29 de setiembre *\nC:Jueves 28 de setiembre");
if (preg2=="B"){
    preg2=25
}
else{
    preg2=0
}
document.write("Tu puntaje es: ",preg2);
preg3=prompt("¿De qué color es la prompoción de 2do de secundaria?\nA:Celeste o Turquesa\nB:Rojo\nC:Morado");
if (preg3=="A"){
    preg3=25
}
else{
    preg3=0
}
document.write("Tu puntaje es: ",preg3+preg2);
preg4=prompt("Nuevo deporte incluido este año\nA:Futsal femenino\nB:Balonmano\nC:Marcha atletica");
if (preg4=="C"){
    preg4=25
}
else{
    preg4=0
}
document.write("Tu puntaje es: ",preg4);
puntaje=preg1+preg2+preg3+preg4
if (puntaje=100){
    document.write("Felicitaciones",nom);
}
else{
    document.write("Te falta",nom);
}