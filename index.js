'use strict';

// --------------- Задание Введение в функции --------------

/**
 *
 exercise 1
 * @param age {number} - user age
 * @returns {boolean} - isAdult
 */
function isAdult(age) {
    return age >= 18;
}

/**
 *
 *  exercise 2
 * @param number1 {number} - user number whose multiplicity is checked
 * @param number2 {number} - user multiplicity number
 * @returns {boolean} - true if number is multiplicity
 */
function checkMultiplicity(number1, number2) {
    return number1 % number2 === 0;
}

/**
 *
 *  exercise 3
 side of the tested triangle:
 * @param sideA {number}
 * @param sideB {number}
 * @param sideC {number}
 *
 * @returns {boolean} - true if Triangle is Possible
 */
function isTrianglePossible(sideA, sideB, sideC) {
    return sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA;
}

/**
 *  exercise 4.1
 * @param a {number}  - rhombus base length
 * @param h {number} - rhombus height length
 * @returns {number} - returns square of a rhombus
 */
function rhombusSquare(a, h) {
    if (h <= a && h > 0 && a > 0) {
        return a * h;
    }
}

/**
 exercise 4.2
 * @param r {number} - cylinder radius
 * @param h {number} - cylinder height
 * @returns {number} - returns square of a cylinder
 */
function cylinderSquare(r, h) {
    if (r > 0 && h > 0) {
        return 2 * Math.PI * r * h;
    }
}

/**
 exercise 4.3
 * @param a {number} - triangle base
 * @param h {number} - triangle height
 * @returns {number} - returns square of a triangle
 */
function triangleSquare(a, h) {
    if (a > 0 && h > 0) {
        return a * h / 2;
    }
}

/**
 *
 exercise 4.4
 side of the rectangle:
 * @param a {number}
 * @param b {number}
 * @returns {number}
 */
function rectangleSquare(a, b) {
    if (a > 0 && b > 0) {
        return a * b;
    }
}