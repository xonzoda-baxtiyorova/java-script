// Foydalanuvchidan ma'lumot olish 


prompt('Ismingizni kiriting')
// string -yozuv orqali javob berish

confirm("Ro'yxatdan o'tishni xohlaysizmi?")
// boolean - ha yoki yo'q bilan javob berish

// Foydalanuvchiga ma'lumot berish

alert("Done!")
// foydalanuvchi uchun
console.log("This is console massage")
// developerlar uchun


console.error("This is error massage")
console.warn("This is warning massage")
console.table({ user: "User name", age: 20 })



// O'zgaruvchilar
let userAge = 15
// let , var -kalit so'z , userage - o'zgaruvchi , 15- qiymat
// let va varni qiymatlarini o'zgartirsa bo'ladi

console.log(userAge);
userAge = 16
console.log(userAge);


const userBirthYear = 2011
// o'zgarmas qiymatlarni saqlash uchun
userBirthYear = 2012
console.log(userBirthYear);


