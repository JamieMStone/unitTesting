const Person = require("./person");

test("Person sets name", () => {
    const Jamie = new Person("Jamie", 18);
    expect(Jamie.name).toBe("Jamie");
});

test("Person throws error if age is below 0", () => {
    const expectedError = new Error("age must be above 0");
    expect(() => new Person("Jamie", -18).toThrow(expectedError));
});
