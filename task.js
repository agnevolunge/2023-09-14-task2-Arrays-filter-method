console.log('veikia')

// Užduotis:
// Dirbti su šiuo masyvu:
// [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

// 3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:

let originalElements = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

// 3.1. Gauti tik teigiamus skaičius.

let filteredElements1 = originalElements.filter(function(element) {
    console.log(element)
    console.log(element >= 0)

    return element >= 0
})

console.log(filteredElements1)


// 3.2. Gauti tik neigiamus skaičius.
let filteredElements2 = originalElements.filter(function(element) {

    console.log(element < 0)

    return element < 0
})

console.log(filteredElements2)


// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.
let filteredElements3 = originalElements.filter(function(element) {
  
    console.log(element % 2 === 0)

    return element % 2 === 0
})

console.log(filteredElements3)

// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.
let filteredElements4 = originalElements.filter(function(element) {
  
    console.log(element % 3 === 0)

    return element % 3 === 0
})

console.log(filteredElements4)

// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.

let filteredElements5 = originalElements.filter(function(element) {
  
    console.log(element % 5 === 0)

    return element % 5 === 0
})

console.log(filteredElements5)

// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.
let filteredElements6 = originalElements.filter(function(element) {
  
    console.log(element % 11 === 0)

    return element % 11 === 0
})

console.log(filteredElements6)

// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.

let filteredElements7 = originalElements.filter(function(element) {
  
    console.log(element % 31 === 0)

    return element % 31 === 0
})

console.log(filteredElements7)

// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.

let filteredElements8 = originalElements.filter(function(element) {
  
    console.log(element % 2 === 0 && element % 3 === 0)

    return element % 2 === 0 && element % 3 === 0
})

console.log(filteredElements8)

// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.

let filteredElements9 = originalElements.filter(function(element) {

    return element % 3 === 0 && element % 7 === 0
})

console.log(filteredElements9)

// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.

let filteredElements10 = originalElements.filter(function(element) {

    return element % 5 === 0 && element % 9 === 0
})

console.log(filteredElements10)

// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.

let filteredElements11 = originalElements.filter(function(element) {

    return element % 5 === 0 && element % 11 === 0
})

console.log(filteredElements11)

// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.

let filteredElements12 = originalElements.filter(function(element) {

    return element % 2 === 0 && element % 8 === 0 && element % 12 === 0
})

console.log(filteredElements12)

// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.

let filteredElements13 = originalElements.filter(function(element) {

    return element % 2 === 0 || element % 3 === 0 
})

console.log(filteredElements13)

// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.

let filteredElements14 = originalElements.filter(function(element) {

    return element % 3 === 0 || element % 5 === 0 
})

console.log(filteredElements14)

// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.

let filteredElements15 = originalElements.filter(function(element) {

    return element % 5 === 0 || element % 6 === 0 
})

console.log(filteredElements15)

// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.

let filteredElements16 = originalElements.filter(function(element) {

    return element % 7 === 0 || element % 8 === 0 
})

console.log(filteredElements16)

// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.

let filteredElements17 = originalElements.filter(function(element) {

    return element % 9 === 0 || element % 13 === 0 
})

console.log(filteredElements17)

// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.

let filteredElements18 = originalElements.filter(function(element) {

    return element % 2 === 0 || element % 3 === 0 || element % 5 === 0
})

console.log(filteredElements18)

// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.

let filteredElements19 = originalElements.filter(function(element) {

    return element % 5 === 0 || element % 7 === 0 || element % 9 === 0
})

console.log(filteredElements19)

// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.

let filteredElements20 = originalElements.filter(function(element) {

    return element % 7 === 0 || element % 8 === 0 || element % 11 === 0
})

console.log(filteredElements20)

// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.
// 3.22. Gauti tik skaičius, kurie yra didesni už 100.
// 3.23. Gauti tik skaičius, kurie yra didesni už 555.
// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.
// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.
// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.
// 3.51. Gauti tik skaičius.
// 3.52. Gauti tik tekstus (string).
// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.
// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
// 3.55. Gauti tik tekstus (string), kurie turi mažiau nei 7 simbolius.
// 3.56. Gauti tik tekstus (string), kurie turi raidę t.
// 3.57. Gauti tik tekstus (string), kurie turi raidę y.
// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.
// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
// 3.70. Gauti tik tekstus (string), kurie baigiasi raide d.
// 3.71. Gauti tik tekstus (string), kurie baigiasi raide s.
// 3.72. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
// 3.73. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
// 3.74. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
// 3.75. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
// 3.76. Gauti tik tekstus (string), kurių trečias simbolis yra a.
// 3.77. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
// 3.78. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
// 3.79. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.