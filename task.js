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

let filteredElements21 = originalElements.filter(function(element) {
    return element % 9 === 0 || element % 12 === 0 || element % 13 === 0
})
console.log(filteredElements21)

// 3.22. Gauti tik skaičius, kurie yra didesni už 100.

let filteredElements22 = originalElements.filter(function(element) {
    return element > 100
})
console.log(filteredElements22)

// 3.23. Gauti tik skaičius, kurie yra didesni už 555.

let filteredElements23 = originalElements.filter(function(element) {
    return element > 555
})
console.log(filteredElements23)

// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.

let filteredElements24 = originalElements.filter(function(element) {
    return element >= 888
})
console.log(filteredElements24)

// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.

let filteredElements25 = originalElements.filter(function(element) {
    return element >= 6789
})
console.log(filteredElements25)

// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.

let filteredElements26 = originalElements.filter(function(element) {
    return element < 50
})
console.log(filteredElements26)

// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.

let filteredElements27 = originalElements.filter(function(element) {
    return element < 1000
})
console.log(filteredElements27)

// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.

let filteredElements28 = originalElements.filter(function(element) {
    return element <= -1
})
console.log(filteredElements28)

// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.

let filteredElements29 = originalElements.filter(function(element) {
    return element <= -5564
})
console.log(filteredElements29)

// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.

let filteredElements30 = originalElements.filter(function(element) {
    return element < 1000 && element > 500
})
console.log(filteredElements30)

// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.

let filteredElements31 = originalElements.filter(function(element) {
    return element < 100 && element > 0
})
console.log(filteredElements31)

// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.

let filteredElements32 = originalElements.filter(function(element) {
    return element < 0 && element > -50
})
console.log(filteredElements32)

// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.

let filteredElements33 = originalElements.filter(function(element) {
    return element <= 0 && element > -100
})
console.log(filteredElements33)

// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.

let filteredElements34 = originalElements.filter(function(element) {
    return element >= 0 && element < 55
})
console.log(filteredElements34)

// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.

let filteredElements35 = originalElements.filter(function(element) {
    return element >= 444 && element <= 654
})
console.log(filteredElements35)

// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.

let filteredElements36 = originalElements.filter(function(element) {
    return element > 0  && element % 2 === 0
})
console.log(filteredElements36)

// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.

let filteredElements37 = originalElements.filter(function(element) {
    return element > 0  && element % 3 === 0
})
console.log(filteredElements37)

// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.

let filteredElements38 = originalElements.filter(function(element) {
    return element < 0  && element % 4 === 0
})
console.log(filteredElements38)

// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.

let filteredElements39 = originalElements.filter(function(element) {
    return element < 0  && element % 111 === 0
})
console.log(filteredElements39)

// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.

let filteredElements40 = originalElements.filter(function(element) {
    return element > 500  && element % 2 === 0
})
console.log(filteredElements40)

// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.

let filteredElements41 = originalElements.filter(function(element) {
    return element > 1000  && element % 3 === 0
})
console.log(filteredElements41)

// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.

let filteredElements42 = originalElements.filter(function(element) {
    return element < 1000  && element % 9 === 0
})
console.log(filteredElements42)

// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.

let filteredElements43 = originalElements.filter(function(element) {
    return element < 500  && element % 2 === 0
})
console.log(filteredElements43)

// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.

let filteredElements44 = originalElements.filter(function(element) {
    return element >= 33  && element % 3 === 0
})
console.log(filteredElements44)

// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.

let filteredElements45 = originalElements.filter(function(element) {
    return element >= 444  && element % 12 === 0
})
console.log(filteredElements45)

// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.

let filteredElements46 = originalElements.filter(function(element) {
    return element <= 155  && element % 5 === 0
})
console.log(filteredElements46)

// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.

let filteredElements47 = originalElements.filter(function(element) {
    return element <= -333  && element % 9 === 0
})
console.log(filteredElements47)

// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.

let filteredElements48 = originalElements.filter(function(element) {
    return element > 100 && element < 500  && element % 5 === 0
})
console.log(filteredElements48)

// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.

let filteredElements49 = originalElements.filter(function(element) {
    return element >= 888 && element < 1000  && element % 2 === 0
})
console.log(filteredElements49)

// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.

let filteredElements50 = originalElements.filter(function(element) {
    return element <= 888 && element >= -333  && element % 3 === 0 && element !== 0
})
console.log(filteredElements50)

// 3.51. Gauti tik skaičius.

let filteredElements51 = originalElements.filter(function(element) {
    return typeof element === 'number'
})
console.log(filteredElements51)

// 3.52. Gauti tik tekstus (string).

let filteredElements52 = originalElements.filter(function(element) {
    return typeof element === 'string'
})
console.log(filteredElements52)

// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.
let filteredElements53 = originalElements.filter(function(element) {
    return typeof element === 'string' && element.length > 5
})
console.log(filteredElements53)

// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.

let filteredElements54 = originalElements.filter(function(element) {
    return typeof element === 'string' && element.length <= 5
})
console.log(filteredElements54)

// 3.55. Gauti tik tekstus (string), kurie turi mažiau nei 7 simbolius.

let filteredElements55 = originalElements.filter(function(element) {
    return typeof element === 'string' && element.length < 7
})
console.log(filteredElements55)

// 3.56. Gauti tik tekstus (string), kurie turi raidę t.

let filteredElements56 = originalElements.filter(function(element) {
    // return typeof element === 'string' && element.charAt() === 't'
    return typeof element === 'string' && element.includes('t')
})
console.log(filteredElements56)

// 3.57. Gauti tik tekstus (string), kurie turi raidę y.

let filteredElements57 = originalElements.filter(function(element) {
    return typeof element === 'string' && element.includes('y')
})
console.log(filteredElements57)

// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.

let filteredElements58 = originalElements.filter(function(element) {
    return typeof element === 'string' && (element.includes('e') || element.includes('a'))
})
console.log(filteredElements58)

// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.

let filteredElements59 = originalElements.filter(function(element) {
    return typeof element === 'string' && (element.includes('t') && element.includes('i'))
})
console.log(filteredElements59)

// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.

let filteredElements60 = originalElements.filter(function(element) {
    return typeof element === 'string' && (element.includes('t') && !element.includes('k'))
})
console.log(filteredElements60)

// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.

let filteredElements61 = originalElements.filter(function(element) {
    return typeof element === 'string' && (element.includes('a') && !element.includes('s'))
})
console.log(filteredElements61)

// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.

let filteredElements62 = originalElements.filter(function(element) {
    
    //split metodas suskaido stringa pagal pateikta reiksme. jeigu pateikiami tusti skliaustai, tai stringa suskaido raidemis.
    // return typeof element === 'string' && element.split('t').length > 2

    //ANTRAS VARIANTAS

})
console.log(filteredElements62)

// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
let filteredElements63 = originalElements.filter(function(element) {
    return typeof element === 'string' && (element.includes('st'))
})
console.log(filteredElements63)

// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.

let filteredElements64 = originalElements.filter(function(element) {
    return typeof element === 'string' && (element.includes('nd'))
})
console.log(filteredElements64)

// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.

let filteredElements65 = originalElements.filter(function(element) {
    return typeof element === 'string' && !element.includes('s')
})
console.log(filteredElements65)

// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.

let filteredElements66 = originalElements.filter(function(element) {
    return typeof element === 'string' && !element.includes('t')
})
console.log(filteredElements66)

// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.

let filteredElements67 = originalElements.filter(function(element) {
    return typeof element === 'string' && (!element.includes('r') && !element.includes('l'))
})
console.log(filteredElements67)

// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.

let filteredElements68 = originalElements.filter(function(element) {
    return typeof element === 'string' && !isNaN(element.slice(0, 1))
})
console.log(filteredElements68)

// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.

let filteredElements69 = originalElements.filter(function(element) {
    return typeof element === 'string' && element.slice(0, 1).includes('s')
})
console.log(filteredElements69)

// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
let filteredElements70 = originalElements.filter(function(element) {
    return typeof element === 'string' && element.slice(0, 1).includes('o')
})
console.log(filteredElements70)

// 3.70. Gauti tik tekstus (string), kurie baigiasi raide d.
let filteredElements701 = originalElements.filter(function(element) {
    return typeof element === 'string' && element.slice(-1).includes('d')
})
console.log(filteredElements701)

// 3.71. Gauti tik tekstus (string), kurie baigiasi raide s.
let filteredElements71 = originalElements.filter(function(element) {
    return typeof element === 'string' && element.slice(-1).includes('s')
})
console.log(filteredElements71)

// 3.72. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
let filteredElements72 = originalElements.filter(function(element) {
    return typeof element === 'string' && element.length > 4 && element.includes('o')
})
console.log(filteredElements72)

// 3.73. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
let filteredElements73 = originalElements.filter(function(element) {
    return typeof element === 'string' && element.length >= 5 && element.includes('a')
})
console.log(filteredElements73)

// 3.74. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
let filteredElements74 = originalElements.filter(function(element) {
    return typeof element === 'string' && element.length % 2 === 0
})
console.log(filteredElements74)

// 3.75. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
let filteredElements75 = originalElements.filter(function(element) {
    return typeof element === 'string' && (!element.length % 2 === 0 && element.includes('s'))
})
console.log(filteredElements75)

// 3.76. Gauti tik tekstus (string), kurių trečias simbolis yra a.
let filteredElements76 = originalElements.filter(function(element) {
    return typeof element === 'string' && element.slice(2, 3).includes('a')
})
console.log(filteredElements76)

// 3.77. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
let filteredElements77 = originalElements.filter(function(element) {
   
    return typeof element === 'string' && element.slice(3, 4).includes('l')
})
console.log(filteredElements77)

// 3.78. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
let filteredElements78 = originalElements.filter(function(element) {
   
    return typeof element === "string" && !element.slice(4, 5).includes("t") && element.length > 4
})
console.log(filteredElements78)

// 3.79. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.
let filteredElements79 = originalElements.filter(function(element) {
   
    return typeof element === "string" && element.length < 6 && (!element.slice(0, 1).includes("e") && isNaN(element.slice(0, 1)))
})
console.log(filteredElements79)