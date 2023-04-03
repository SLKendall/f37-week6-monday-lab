const {returnTwo,greeting,add} = require (`./function.js`)

test('Test to ensure returnTwo function returns two', () => {
      expect(returnTwo()).toBe(2)
    })

test(`Test to ensure greeting returns name parameter properrly`, () => {
      expect(greeting("Spencer")).toBe("Hello, Spencer.")
})

test(`Test to ensure add returns a sum of num1 and num2 parameters`, () => {
    expect(add(2,8)).toBe(10)
})