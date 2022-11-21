// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Phone number tests
test('(576) 123-3856 is a phone number', () => {
    expect(functions.isPhoneNumber('(576) 123-3856')).toBe(true);
});
test('(365) 048-3470 is a phone number', () => {
    expect(functions.isPhoneNumber('(365) 048-3470')).toBe(true);
});
test('3461749673 is not a phone number', () => {
    expect(functions.isPhoneNumber('3461749673')).toBe(false);
});
test('() -  is not a phone number', () => {
    expect(functions.isPhoneNumber('() - ')).toBe(false);
});
// Email tests
test('rotoole@ucsd.edu is an email address', () => {
    expect(functions.isEmail('rotoole@ucsd.edu')).toBe(true);
});
test('johnsmith@gmail.com is an email address', () => {
    expect(functions.isEmail('johnsmith@gmail.com')).toBe(true);
});
test('zsexdrcvfgbhnjm is not an email address', () => {
    expect(functions.isEmail('zsexdrcvfgbhnjm')).toBe(false);
});
test('@. is not an email address', () => {
    expect(functions.isEmail('@.')).toBe(false);
});
// Password tests
test('aFWE4345_gr is a strong password', () => {
    expect(functions.isStrongPassword('aFWE4345_gr')).toBe(true);
});
test('apple is a strong password', () => {
    expect(functions.isStrongPassword('apple')).toBe(true);
});
test('egg is not a strong password', () => {
    expect(functions.isStrongPassword('egg')).toBe(false);
});
test('SDF%&JTe is not a strong password', () => {
    expect(functions.isStrongPassword('SDF%&JTe')).toBe(false);
});
// Date tests
test('12/34/5678 is a date', () => {
    expect(functions.isDate('12/34/5678')).toBe(true);
});
test('99/99/9999 is a date', () => {
    expect(functions.isDate('99/99/9999')).toBe(true);
});
test('18553957 is not a date', () => {
    expect(functions.isDate('18553957')).toBe(false);
});
test('1/6/34 is not a date', () => {
    expect(functions.isDate('1/6/34')).toBe(false);
});
// Hex color tests
test('127d8f is a hex color code', () => {
    expect(functions.isHexColor('127d8f')).toBe(true);
});
test('3D6 is a hex color code', () => {
    expect(functions.isHexColor('3D6')).toBe(true);
});
test('1d45 is not a hex color code', () => {
    expect(functions.isHexColor('1d45')).toBe(false);
});
test('89g5t4 is not a hex color code', () => {
    expect(functions.isHexColor('89g5t4')).toBe(false);
});
