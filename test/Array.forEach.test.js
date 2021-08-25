const { assert } = require('chai');
const MyArray = require('../src/Array.forEach');

const testArrayNumeric = [1, 2, 3, 4, 5];

describe('MyArray - custom method myForEach', () => {
  it('Should iterate through all elements by their respective index & apply a function', () => {
    const myArray = new MyArray(...testArrayNumeric);

    // @ts-ignore
    myArray.myForEach((element, index) => {
      assert.strictEqual(element, testArrayNumeric[index], '');
    });
  });

  it('Should multiply each element of a numberic array by 2', () => {
    const testArrayNumeric = [1, 2, 3, 4, 5];
    const expectedArray = [2, 4, 6, 8, 10];
    const resultArrayNumeric = [];
    const myArray = new MyArray(...testArrayNumeric);

    // @ts-ignore
    myArray.myForEach((element) => {
      const result = element * 2;
      resultArrayNumeric.push(result);
    });

    assert.deepEqual(
      [...resultArrayNumeric],
      [...expectedArray],
      'The elements of both arrays differ from one another'
    );
  });

  it("Should pass each array's element, its index argument and the array itself to the callback function", () => {
    const myArray = new MyArray(...testArrayNumeric);
    // @ts-ignore
    myArray.myForEach((element, index, array) => {
      assert.strictEqual(element, array[index]);
      assert.isDefined(element, 'Property `element` is not defined');
      assert.typeOf(index, 'Number', 'Property `index` is not numeric');
      assert.typeOf(array, 'Array', 'Property `array` is not an array');
    });
  });
});
