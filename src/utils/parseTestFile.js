class Test {
  static mainParse(fnName, fnParam, expectedValue, testVerb) {
    return `test("Testing main function", () => expect(${fnName}(${fnParam})).${testVerb}(${expectedValue}))`;
  }

  static assertEquals([fnName, fnParam], expectedValue, testVerb) {
    return this.mainParse(
      fnName,
      fnParam ? JSON.stringify(fnParam) : "",
      JSON.stringify(expectedValue),
      "toBe"
    );
  }

  static assertSimilar([fnName, fnParam], expectedValue, testVerb) {
    return this.mainParse(
      fnName,
      fnParam ? JSON.stringify(fnParam) : "",
      JSON.stringify(expectedValue),
      "toStrictEqual"
    );
  }

  static assertNotEquals([fnName, fnParam], expectedValue, testVerb) {
    return this.mainParse(
      fnName,
      fnParam ? JSON.stringify(fnParam) : "",
      JSON.stringify(expectedValue),
      "not.toBe"
    );
  }

  static expect([fnName, fnParam], expectedValue, testVerb) {
    return this.mainParse(
      fnName,
      fnParam ? JSON.stringify(fnParam) : "",
      JSON.stringify(expectedValue),
      "toBeTruthy"
    );
  }

  static assertDeepEquals([fnName, fnParam], expectedValue, testVerb) {
    return this.mainParse(
      fnName,
      fnParam ? JSON.stringify(fnParam) : "",
      JSON.stringify(expectedValue),
      "toMatchObject"
    );
  }

  static expectError(expectedValue, [fnName, fnParam], testVerb) {
    return this.mainParse(
      fnName,
      fnParam ? JSON.stringify(fnParam) : "",
      JSON.stringify(expectedValue),
      "toThrow"
    );
  }

  static expectNoError(expectedValue, [fnName, fnParam], testVerb) {
    return this.mainParse(
      fnName,
      fnParam ? JSON.stringify(fnParam) : "",
      JSON.stringify(expectedValue),
      "not.toThrow"
    );
  }
}

module.exports.parseTest = (originalTestLine, testFnName) => {
  const validatorExpression = /Test\..*\(.*\);?/;

  if (validatorExpression.test(originalTestLine)) {
    const extractedTest = originalTestLine.match(validatorExpression)[0];
    try {
      const parsedTest = eval(`
      const ${testFnName} = params => ["${testFnName}", params];
      ${extractedTest}
    `);
      return originalTestLine.replace(extractedTest, parsedTest);
    } catch (e) {
      return `!.!${originalTestLine}`;
    }
  }

  // no occurrences found
  return originalTestLine;
};
