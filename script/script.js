alert("Assalomu alaykum o'zingiz haqingizda bilmoqchimisiz?");
var kg = Number(prompt("Juda yahshi unda og'irligingizni kiriting? (kg)"));
var tall = Number(prompt("Endi bo'yingiz uzunligini kiriting? (masalan 1.6)"));
var BMI = Number(kg / tall ** 2);
// console.log (BMI)
if (BMI >= 18.5 && BMI <= 25) {
  alert("Sizda hammasi zo'r");
} else if (BMI < 18.5) {
  alert("Sizda vazinda muammo bor (semiring)");
} else if (BMI > 25) {
  alert("Bo'yingizda muammo bor (o'sing)");
} else {
  alert("noto'g'ri malumot yozdingiz tekshirib qaytadan yozing");
}
