describe("value testing", () => {
  test("strings are string", () => {
    expect(/* a matching string*/).toBe("Hello World");
    expect(stringCheck(/*a word */)).toBeTruthy();
    expect(stringCheck(/*a sentence*/)).toBeTruthy();
    expect(stringCheck(/*not a string*/)).toBeFalsy();
  });
  test("numbers are numbers", () => {
    expect(/* a matching number*/).toBe(3.14159);
    expect(numberCheck(/*a decimal number*/)).toBeTruthy();
    expect(numberCheck(/*an equation*/)).toBeTruthy();
    expect(numberCheck(/*not a number*/)).toBeFalsy();
  });
  test("booleans are booleans", () => {
    expect(/* a matching boolean*/).toBe(false);
    expect(booleanCheck(/*a "true" boolean*/)).toBeTruthy();
    expect(booleanCheck(/*a "false" boolean*/)).toBeTruthy();
    expect(booleanCheck(/*not a boolean*/)).toBeFalsy();
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
npm i
