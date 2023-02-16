// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

const { fromEuroToDollar } = require('./app.js')

test("One euro should be 1.2 U.S. dollars", function(){
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2; 
    
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

const { fromDollarToYen } = require('./app.js')

test("One U.S. dollar should be 106.58 Japanese yen", function(){
    const yen = fromDollarToYen(3.5)
    const expected = (3.5/1.2)*127.9; 
    
    expect(yen).toBe(expected); 
})

const { fromYenToPound } = require('./app.js')

test("One thousand Japanese yen should be approximately 6.25 pounds sterling", function(){
    const yen = fromYenToPound(3.5)
    const expected = (3.5/127.9) * 0.8; 
    
    expect(yen).toBe(expected); 
})
