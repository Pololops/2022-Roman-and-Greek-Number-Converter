import RomanConverter  from './RomanConverter';

const instance = new RomanConverter();

describe('Roman Translator', () => {
	it('1 should return I', () => {
		expect(instance.convert(1)).toEqual('I');
	});

	it('2 should return II', () => {
		expect(instance.convert(2)).toEqual('II');
	});

	it('3 should return III', () => {
		expect(instance.convert(3)).toEqual('III');
	});

	it('4 should return IV', () => {
		expect(instance.convert(4)).toEqual('IV');
	});

	it('5 should return V', () => {
		expect(instance.convert(5)).toEqual('V');
	});

	it('6 should return VI', () => {
		expect(instance.convert(6)).toEqual('VI');
	});

	it('7 should return VII', () => {
		expect(instance.convert(7)).toEqual('VII');
	});

	it('8 should return VIII', () => {
		expect(instance.convert(8)).toEqual('VIII');
	});

	it('9 should return IX', () => {
		expect(instance.convert(9)).toEqual('IX');
	});

	it('10 should return X', () => {
		expect(instance.convert(10)).toEqual('X');
	});

	it('19 should return XIX', () => {
		expect(instance.convert(19)).toEqual('XIX');
	});

	it('20 should return XX', () => {
		expect(instance.convert(20)).toEqual('XX');
	});

	it('43 should return XLIII', () => {
		expect(instance.convert(43)).toEqual('XLIII');
	});

	it('44 should return XLIV', () => {
		expect(instance.convert(44)).toEqual('XLIV');
	});

	it('45 should return XLV', () => {
		expect(instance.convert(45)).toEqual('XLV');
	});

	it('48 should return XLVIII', () => {
		expect(instance.convert(48)).toEqual('XLVIII');
	});

	it('49 should return XLIX', () => {
		expect(instance.convert(49)).toEqual('XLIX');
	});

	it('50 should return L', () => {
		expect(instance.convert(50)).toEqual('L');
	});

	it('should return LIII', () => {
		expect(instance.convert(53)).toEqual('LIII');
	});

	it('54 should return LIV', () => {
		expect(instance.convert(54)).toEqual('LIV');
	});

	it('99 should return XCIX', () => {
		expect(instance.convert(99)).toEqual('XCIX');
	});

	it('100 should return C', () => {
		expect(instance.convert(100)).toEqual('C');
	});

	it('153 should return CLIII', () => {
		expect(instance.convert(153)).toEqual('CLIII');
	});

	it('447 should return CDXLVII', () => {
		expect(instance.convert(447)).toEqual('CDXLVII');
	});

	it('500 should return D', () => {
		expect(instance.convert(500)).toEqual('D');
	});

	it('949 should return CMXLIX', () => {
		expect(instance.convert(949)).toEqual('CMXLIX');
	});

	it('1000 should return M', () => {
		expect(instance.convert(1000)).toEqual('M');
	});

	it('1727 should return MDCCXXVII', () => {
		expect(instance.convert(1727)).toEqual('MDCCXXVII');
	});

	it('3727 should return MMMDCCXXVII', () => {
		expect(instance.convert(3727)).toEqual('MMMDCCXXVII');
	});
});
