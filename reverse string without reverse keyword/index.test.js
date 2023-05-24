import reverseString from './index'

test('should have a function reverseString defined',()=>{
    expect(reverseString).toBeDefined()
})

test('should have a defined return statement',()=>{
    let input ="Hello"
    let result=reverseString(input)
      expect(result).toBeDefined()
})
test('should return a string',()=>{
    let input ="Hello"
    let result=reverseString(input)
    expect(typeof result).toBe('string')
})
test('should return "olleh" given the string "hello"',()=>{
    let input ="Hello"
    let result=reverseString(input)
    expect(result).toBe('olleh')
})