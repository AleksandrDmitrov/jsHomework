'use strict';

// --------------- Задание Введение в функции --------------

/**
 *
 exercise 1
 * @param age - user age
 * @returns {boolean} - isAdult
 */
function isAdult(age) {
return age >= 20;
}

/**
 *
 *  exercise 2
 * @param number1 - user number whose multiplicity is checked
 * @param number2 - user multiplicity number
 * @returns {boolean} - true if number is multiplicity
 */
function checkMultiplicity(number1, number2) {
   return number1 % number2 === 0;
}

/**
 *
 *  exercise 3
 side of the tested triangle:
 * @param sideA
 * @param sideB
 * @param sideC
 *
 * @returns {boolean} - true if Triangle is Possible
 */
function   isTrianglePossible(sideA, sideB, sideC) {
    return sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC >sideA;
}