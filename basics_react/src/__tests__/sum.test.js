import sum from "../dummytest/sum"

test("sum of 3,4 expected to be 7",() => {
    
    expect(sum(3,4)).toBe(7);
})