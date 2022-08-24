const RomanNumeral = require('./RomanNumeral');

describe('RomanNumeral class', () => {
    
    const instance = new RomanNumeral();
    
    beforeEach(() => {
        instance.stringRomanNumberResult =''
      })

      describe('stringNumberConvertToStringRomanNumber()', () => {
    
        test(`stringNumberConvertToStringRomanNumber('1') return I`, () => {
          expect(instance.stringNumberConvertToStringRomanNumber('1')).toEqual('I');
        });
        test(`stringNumberConvertToStringRomanNumber('2') return II`, () => {
          expect(instance.stringNumberConvertToStringRomanNumber('2')).toEqual('II');
        });
        test(`stringNumberConvertToStringRomanNumber('3') return III`, () => {
          expect(instance.stringNumberConvertToStringRomanNumber('3')).toEqual('III');
        });
        test(`stringNumberConvertToStringRomanNumber('4') return IV`, () => {
          expect(instance.stringNumberConvertToStringRomanNumber('4')).toEqual('IV');
        });
        test(`stringNumberConvertToStringRomanNumber('5') return V`, () => {
          expect(instance.stringNumberConvertToStringRomanNumber('5')).toEqual('V');
        });
        test(`stringNumberConvertToStringRomanNumber('6') return VI`, () => {
          expect(instance.stringNumberConvertToStringRomanNumber('6')).toEqual('VI');
        });
        test(`stringNumberConvertToStringRomanNumber('8') return VIII`, () => {
          expect(instance.stringNumberConvertToStringRomanNumber('8')).toEqual('VIII');
        });
        test(`stringNumberConvertToStringRomanNumber('9') return IX`, () => {
          expect(instance.stringNumberConvertToStringRomanNumber('9')).toEqual('IX');
        });
        test(`stringNumberConvertToStringRomanNumber('10') return X`, () => {
          expect(instance.stringNumberConvertToStringRomanNumber('10')).toEqual('X');
        });
        test(`stringNumberConvertToStringRomanNumber('30') return XXX`, () => {
          expect(instance.stringNumberConvertToStringRomanNumber('30')).toEqual('XXX');
        });
        test(`stringNumberConvertToStringRomanNumber('28') return XXVIII`, () => {
          expect(instance.stringNumberConvertToStringRomanNumber('28')).toEqual('XXVIII');
        });
        test(`stringNumberConvertToStringRomanNumber('50') return L`, () => {
          expect(instance.stringNumberConvertToStringRomanNumber('50')).toEqual('L');
        });
        test(`stringNumberConvertToStringRomanNumber('78') return LXXVIII`, () => {
          expect(instance.stringNumberConvertToStringRomanNumber('78')).toEqual('LXXVIII');
        });
        test(`stringNumberConvertToStringRomanNumber('100') return C`, () => {
          expect(instance.stringNumberConvertToStringRomanNumber('100')).toEqual('C');
        });
        test(`stringNumberConvertToStringRomanNumber('153') return CLIII`, () => {
          expect(instance.stringNumberConvertToStringRomanNumber('153')).toEqual('CLIII');
        });
        test(`stringNumberConvertToStringRomanNumber('500') return D`, () => {
          expect(instance.stringNumberConvertToStringRomanNumber('500')).toEqual('D');
        });
        test(`stringNumberConvertToStringRomanNumber('503') return DIII`, () => {
          expect(instance.stringNumberConvertToStringRomanNumber('503')).toEqual('DIII');
        });
        test(`stringNumberConvertToStringRomanNumber('1000') return M`, () => {
          expect(instance.stringNumberConvertToStringRomanNumber('1000')).toEqual('M');
        });
        test(`stringNumberConvertToStringRomanNumber('1727') return MDCCXXVII`, () => {
          expect(instance.stringNumberConvertToStringRomanNumber('1727')).toEqual('MDCCXXVII');
        });
        test(`stringNumberConvertToStringRomanNumber('3727') return MMMDCCXXVII`, () => {
          expect(instance.stringNumberConvertToStringRomanNumber('3727')).toEqual('MMMDCCXXVII');
        }); 
        test(`stringNumberConvertToStringRomanNumber('29') return XXIX`, () => {
          expect(instance.stringNumberConvertToStringRomanNumber('29')).toEqual('XXIX');
        });
    });
})