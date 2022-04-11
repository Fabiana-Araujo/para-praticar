// 1 parte
const myName = "Fabiana";
const birthCity = "Aracaju";
let birthYear = 1985;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

birthYear = 2030;

console.log(birthYear);

// 2 parte
let patientId = "50";
let isEnrolled = true;
const patientInfo = {
    firstName: "Ana",
    lastName: "Santos",
};
const patientEmail = "ana@email.com";

console.log(typeof patientId);

const base = 5;
const height = 8;
const area = base * height;

console.log(base);
console.log(height);
console.log(area);

// 3 parte
const nota = 85;
if (nota >= 80) {
    console.log("Parabéns, vovê foi aprovada(o)!");
}
if(nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera");
}
if(nota < 60){
    console.log("Você foi reprovada(o)");
}else{
    console.log("Nota invalida");
}