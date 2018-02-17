const expect = require('expect');

 var {isRealString} =require('./validation');

 describe('isRealString', () => {
   it('should reject non-string values', () => {
     var typ = isRealString(98);
     expect(typ).toBe(false);
   });

   it('should reject string with only spaces', () => {
     var typ = isRealString('     ');
     expect(typ).toBe(false);
   });

   it('should allow string with non-space caracteres', () => {
     var typ = isRealString('   Freud   ');

     expect(typ).toBe(true);
   });
 });
