import ArrayBuff from '../basic';
import getBuffer from '../getBuffer';

test('toString', () => {
  const converter = new ArrayBuff();
  converter.load(getBuffer());
  expect(converter.toString()).toMatch(
    'какие-то строковые данные'
  );
});
