class RomanNumeral {

    entryNum;
    objectStringCutInNumber = {};
    stringRomanNumberResult = '';
    parts = [1000,500,100,50,10,5,1];
    romanSign = ['M','D','C','L','X','V','I'];

    stringNumberConvertToStringRomanNumber(text){
        this.convertEntryStringNumtoNum(text);

        this.cutNumberInParts(this.entryNum);
        this.convertAllNumToRoman();
        
        this.handleException();

        return this.stringRomanNumberResult;
    };
    convertEntryStringNumtoNum(text){
        this.entryNum = parseInt(text);
    };
    
    cutNumberInParts(num){
        this.parts.forEach(item => {
            this.objectStringCutInNumber[item] = Math.floor(num/item);
            num = num % item ;
        });
    };
    convertAllNumToRoman(){
        var i = 0
        this.parts.forEach(item => {
            this.convertOneNumToRoman(this.objectStringCutInNumber[item],this.romanSign[i])
            i++
        });
    };
    convertOneNumToRoman(num,romanSign){
        for (let i = 0;i < num ; i++){
            this.stringRomanNumberResult += romanSign;
        };
    };
    handleException(){
        this.stringRomanNumberResult = this.stringRomanNumberResult.replace('VIIII','IX')
        this.stringRomanNumberResult = this.stringRomanNumberResult.replace('IIII','IV')
    };
}

module.exports = RomanNumeral;