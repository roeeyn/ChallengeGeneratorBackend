// [
//   {
//     detectedCase: ".assertEquals(",
//     url: "https://edabit.com/challenge/ARr5tA458o2tC9FTN",
//     isValid: true,
//   },
//   {
//     detectedCase: ".assertSimilar(",
//     url: "https://edabit.com/challenge/kJQYTCCWSnzhXG9dn",
//     isValid: true,
//   },
//   {
//     detectedCase: ".assertNotEquals(",
//     url: "https://edabit.com/challenge/T2sDPQQhpaEd9YAiq",
//     isValid: true,
//   },
//   {
//     detectedCase: ".expect(",
//     url: "https://edabit.com/challenge/wBAuop24JYt9MZhXF",
//     isValid: true,
//   },
//   {
//     detectedCase: ".expectError(",
//     url: "https://edabit.com/challenge/vqwqCwfJ3r4zFvzPn",
//     isValid: true,
//   },
//   {
//     detectedCase: ".describe(",
//     url: "https://edabit.com/challenge/GaWzhCsGSHcWyGoZh",
//     isValid: true,
//   },
//   {
//     detectedCase: ".expectNoError(",
//     url: "https://edabit.com/challenge/b7dXbWEhbr3bXCk7i",
//     isValid: true,
//   },
//   {
//     detectedCase: ".assertDeepEquals(",
//     url: "https://edabit.com/challenge/neWTApTYread9ZNdP",
//     isValid: true,
//   },
// ]
const { parseNewTest } = require("./parseTestFile.js");

describe("Testing the test parsing", () => {
  test("Parse assertEquals", () => {
    const initialTests = [
      [
        `Test.assertEquals(hello(), "hello edabit.com", "Did you *return* the result?");`,
        "hello",
      ],
      [
        `Test.assertEquals(hello([1,2,3]), [2,4,6], "Did you *return* the result?");`,
        "hello",
      ],
      [
        `Test.assertEquals(hello({holi: "crayoli", como: "estas"}), {muy: "bien", muchas:"gracias"}, "Did you *return* the result?");`,
        "hello",
      ],
      [
        `hola soy pedrito Test.assertEquals(hello(), "hello edabit.com", "Did you *return* the result?"); hola ya no soy pedrito`,
        "hello",
      ],
      [
        `hola soy pedrito Test.assertEquals(hello([1,2,3]), [2,4,6], "Did you *return* the result?"); hola ya no soy pedrito`,
        "hello",
      ],
      [
        `hola soy pedrito Test.assertEquals(hello({holi: "crayoli", como: "estas"}), {muy: "bien", muchas:"gracias"}, "Did you *return* the result?"); hola ya no soy pedrito`,
        "hello",
      ],
    ];

    const expectedResults = [
      `test("Testing main function", () => expect(hello()).toBe("hello edabit.com"))`,
      `test("Testing main function", () => expect(hello([1,2,3])).toBe([2,4,6]))`,
      `test("Testing main function", () => expect(hello({"holi":"crayoli","como":"estas"})).toBe({"muy":"bien","muchas":"gracias"}))`,
      `hola soy pedrito test("Testing main function", () => expect(hello()).toBe("hello edabit.com")) hola ya no soy pedrito`,
      `hola soy pedrito test("Testing main function", () => expect(hello([1,2,3])).toBe([2,4,6])) hola ya no soy pedrito`,
      `hola soy pedrito test("Testing main function", () => expect(hello({"holi":"crayoli","como":"estas"})).toBe({"muy":"bien","muchas":"gracias"})) hola ya no soy pedrito`,
    ];

    initialTests.forEach(([initialTest, fnName], idx) =>
      expect(parseNewTest(initialTest, fnName)).toBe(expectedResults[idx])
    );
  });

  test("Parse assertSimilar", () => {
    const initialTests = [
      [
        `Test.assertSimilar(hello(), "hello edabit.com", "Did you *return* the result?");`,
        "hello",
      ],
      [
        `Test.assertSimilar(hello([1,2,3]), [2,4,6], "Did you *return* the result?");`,
        "hello",
      ],
      [
        `Test.assertSimilar(hello({holi: "crayoli", como: "estas"}), {muy: "bien", muchas:"gracias"}, "Did you *return* the result?");`,
        "hello",
      ],
      [
        `hola soy pedrito Test.assertSimilar(hello(), "hello edabit.com", "Did you *return* the result?"); hola ya no soy pedrito`,
        "hello",
      ],
      [
        `hola soy pedrito Test.assertSimilar(hello([1,2,3]), [2,4,6], "Did you *return* the result?"); hola ya no soy pedrito`,
        "hello",
      ],
      [
        `hola soy pedrito Test.assertSimilar(hello({holi: "crayoli", como: "estas"}), {muy: "bien", muchas:"gracias"}, "Did you *return* the result?"); hola ya no soy pedrito`,
        "hello",
      ],
    ];

    const expectedResults = [
      `test("Testing main function", () => expect(hello()).toStrictEqual("hello edabit.com"))`,
      `test("Testing main function", () => expect(hello([1,2,3])).toStrictEqual([2,4,6]))`,
      `test("Testing main function", () => expect(hello({"holi":"crayoli","como":"estas"})).toStrictEqual({"muy":"bien","muchas":"gracias"}))`,
      `hola soy pedrito test("Testing main function", () => expect(hello()).toStrictEqual("hello edabit.com")) hola ya no soy pedrito`,
      `hola soy pedrito test("Testing main function", () => expect(hello([1,2,3])).toStrictEqual([2,4,6])) hola ya no soy pedrito`,
      `hola soy pedrito test("Testing main function", () => expect(hello({"holi":"crayoli","como":"estas"})).toStrictEqual({"muy":"bien","muchas":"gracias"})) hola ya no soy pedrito`,
    ];

    initialTests.forEach(([initialTest, fnName], idx) =>
      expect(parseNewTest(initialTest, fnName)).toBe(expectedResults[idx])
    );
  });

  test("Parse assertNotEquals", () => {
    const initialTests = [
      [
        `Test.assertNotEquals(hello(), "hello edabit.com", "Did you *return* the result?");`,
        "hello",
      ],
      [
        `Test.assertNotEquals(hello([1,2,3]), [2,4,6], "Did you *return* the result?");`,
        "hello",
      ],
      [
        `Test.assertNotEquals(hello({holi: "crayoli", como: "estas"}), {muy: "bien", muchas:"gracias"}, "Did you *return* the result?");`,
        "hello",
      ],
      [
        `hola soy pedrito Test.assertNotEquals(hello(), "hello edabit.com", "Did you *return* the result?"); hola ya no soy pedrito`,
        "hello",
      ],
      [
        `hola soy pedrito Test.assertNotEquals(hello([1,2,3]), [2,4,6], "Did you *return* the result?"); hola ya no soy pedrito`,
        "hello",
      ],
      [
        `hola soy pedrito Test.assertNotEquals(hello({holi: "crayoli", como: "estas"}), {muy: "bien", muchas:"gracias"}, "Did you *return* the result?"); hola ya no soy pedrito`,
        "hello",
      ],
    ];

    const expectedResults = [
      `test("Testing main function", () => expect(hello()).not.toBe("hello edabit.com"))`,
      `test("Testing main function", () => expect(hello([1,2,3])).not.toBe([2,4,6]))`,
      `test("Testing main function", () => expect(hello({"holi":"crayoli","como":"estas"})).not.toBe({"muy":"bien","muchas":"gracias"}))`,
      `hola soy pedrito test("Testing main function", () => expect(hello()).not.toBe("hello edabit.com")) hola ya no soy pedrito`,
      `hola soy pedrito test("Testing main function", () => expect(hello([1,2,3])).not.toBe([2,4,6])) hola ya no soy pedrito`,
      `hola soy pedrito test("Testing main function", () => expect(hello({"holi":"crayoli","como":"estas"})).not.toBe({"muy":"bien","muchas":"gracias"})) hola ya no soy pedrito`,
    ];

    initialTests.forEach(([initialTest, fnName], idx) =>
      expect(parseNewTest(initialTest, fnName)).toBe(expectedResults[idx])
    );
  });

  test("Parse expect", () => {
    const initialTests = [
      [
        `Test.expect(hello(), "hello edabit.com", "Did you *return* the result?");`,
        "hello",
      ],
      [
        `Test.expect(hello([1,2,3]), [2,4,6], "Did you *return* the result?");`,
        "hello",
      ],
      [
        `Test.expect(hello({holi: "crayoli", como: "estas"}), {muy: "bien", muchas:"gracias"}, "Did you *return* the result?");`,
        "hello",
      ],
      [
        `hola soy pedrito Test.expect(hello(), "hello edabit.com", "Did you *return* the result?"); hola ya no soy pedrito`,
        "hello",
      ],
      [
        `hola soy pedrito Test.expect(hello([1,2,3]), [2,4,6], "Did you *return* the result?"); hola ya no soy pedrito`,
        "hello",
      ],
      [
        `hola soy pedrito Test.expect(hello({holi: "crayoli", como: "estas"}), {muy: "bien", muchas:"gracias"}, "Did you *return* the result?"); hola ya no soy pedrito`,
        "hello",
      ],
    ];

    const expectedResults = [
      `test("Testing main function", () => expect(hello()).toBeTruthy("hello edabit.com"))`,
      `test("Testing main function", () => expect(hello([1,2,3])).toBeTruthy([2,4,6]))`,
      `test("Testing main function", () => expect(hello({"holi":"crayoli","como":"estas"})).toBeTruthy({"muy":"bien","muchas":"gracias"}))`,
      `hola soy pedrito test("Testing main function", () => expect(hello()).toBeTruthy("hello edabit.com")) hola ya no soy pedrito`,
      `hola soy pedrito test("Testing main function", () => expect(hello([1,2,3])).toBeTruthy([2,4,6])) hola ya no soy pedrito`,
      `hola soy pedrito test("Testing main function", () => expect(hello({"holi":"crayoli","como":"estas"})).toBeTruthy({"muy":"bien","muchas":"gracias"})) hola ya no soy pedrito`,
    ];

    initialTests.forEach(([initialTest, fnName], idx) =>
      expect(parseNewTest(initialTest, fnName)).toBe(expectedResults[idx])
    );
  });

  test("Parse assertDeepEquals", () => {
    const initialTests = [
      [
        `Test.assertDeepEquals(hello(), "hello edabit.com", "Did you *return* the result?");`,
        "hello",
      ],
      [
        `Test.assertDeepEquals(hello([1,2,3]), [2,4,6], "Did you *return* the result?");`,
        "hello",
      ],
      [
        `Test.assertDeepEquals(hello({holi: "crayoli", como: "estas"}), {muy: "bien", muchas:"gracias"}, "Did you *return* the result?");`,
        "hello",
      ],
      [
        `hola soy pedrito Test.assertDeepEquals(hello(), "hello edabit.com", "Did you *return* the result?"); hola ya no soy pedrito`,
        "hello",
      ],
      [
        `hola soy pedrito Test.assertDeepEquals(hello([1,2,3]), [2,4,6], "Did you *return* the result?"); hola ya no soy pedrito`,
        "hello",
      ],
      [
        `hola soy pedrito Test.assertDeepEquals(hello({holi: "crayoli", como: "estas"}), {muy: "bien", muchas:"gracias"}, "Did you *return* the result?"); hola ya no soy pedrito`,
        "hello",
      ],
    ];

    const expectedResults = [
      `test("Testing main function", () => expect(hello()).toMatchObject("hello edabit.com"))`,
      `test("Testing main function", () => expect(hello([1,2,3])).toMatchObject([2,4,6]))`,
      `test("Testing main function", () => expect(hello({"holi":"crayoli","como":"estas"})).toMatchObject({"muy":"bien","muchas":"gracias"}))`,
      `hola soy pedrito test("Testing main function", () => expect(hello()).toMatchObject("hello edabit.com")) hola ya no soy pedrito`,
      `hola soy pedrito test("Testing main function", () => expect(hello([1,2,3])).toMatchObject([2,4,6])) hola ya no soy pedrito`,
      `hola soy pedrito test("Testing main function", () => expect(hello({"holi":"crayoli","como":"estas"})).toMatchObject({"muy":"bien","muchas":"gracias"})) hola ya no soy pedrito`,
    ];

    initialTests.forEach(([initialTest, fnName], idx) =>
      expect(parseNewTest(initialTest, fnName)).toBe(expectedResults[idx])
    );
  });

  test("Parse expectError", () => {
    const initialTest = `Test.expectError("Must allow digits and letters", testExp("str8"))`;
    const expectedResult = `test("Testing main function", () => expect(testExp("str8")).toThrow("Must allow digits and letters"))`;
    expect(parseNewTest(initialTest, "testExp")).toBe(expectedResult);
  });

  test("Parse expectNoError", () => {
    const initialTest = `Test.expectNoError("Must allow digits and letters", testExp("str8"))`;
    const expectedResult = `test("Testing main function", () => expect(testExp("str8")).not.toThrow("Must allow digits and letters"))`;
    expect(parseNewTest(initialTest, "testExp")).toBe(expectedResult);
  });
});
