describe("value testing", () => {
  test("strings are string", () => {
    let hello: string = "Hello World";
    let word: string = "test";
    let sentence: string = "Coding is more fun than manual testing.";
    let notAString: number = 1010101010101010;

    expect(hello).toBe("Hello World");
    expect(stringCheck(word)).toBeTruthy();
    expect(stringCheck(sentence)).toBeTruthy();
    expect(stringCheck(notAString)).toBeFalsy();
  });
  test("numbers are numbers", () => {
    let pi: number = 3.14159;
    let decimal: number = -555.333;
    let equationResults: number = (3 * 5) / 13 + 1;
    let notANumber: string = "12";

    expect(pi).toBe(3.14159);
    expect(numberCheck(decimal)).toBeTruthy();
    expect(numberCheck(equationResults)).toBeTruthy();
    expect(numberCheck(notANumber)).toBeFalsy();
  });
  test("booleans are booleans", () => {
    let isFalse: boolean = false;
    let isTrue: boolean = true;
    let falseFromComparison: boolean = 2 > 12;
    let notABoolean: number = 5;

    expect(isFalse).toBe(false);
    expect(booleanCheck(isTrue)).toBeTruthy();
    expect(booleanCheck(falseFromComparison)).toBeTruthy();
    expect(booleanCheck(notABoolean)).toBeFalsy();
  });
});

function numberCheck(x) {
  return typeof x == "number";
}
function stringCheck(x) {
  return typeof x == "string";
}
function booleanCheck(x) {
  return typeof x == "boolean";
}
