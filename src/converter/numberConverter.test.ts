import NumberConverter from './numberConverter';

// Test Roman Convertion
describe('Roman Translator', () => {
	const roman = new NumberConverter('roman');

	it('should return a string', () => {
		expect(typeof roman.convert()).toEqual('string');
	});

	it('0 should return nothing', () => {
		expect(roman.convert()).toEqual('');
	});

	it('1 should return I', () => {
		expect(roman.convert(1)).toEqual('I');
	});

	it('2 should return II', () => {
		expect(roman.convert(2)).toEqual('II');
	});

	it('3 should return III', () => {
		expect(roman.convert(3)).toEqual('III');
	});

	it('4 should return IV', () => {
		expect(roman.convert(4)).toEqual('IV');
	});

	it('5 should return V', () => {
		expect(roman.convert(5)).toEqual('V');
	});

	it('6 should return VI', () => {
		expect(roman.convert(6)).toEqual('VI');
	});

	it('7 should return VII', () => {
		expect(roman.convert(7)).toEqual('VII');
	});

	it('8 should return VIII', () => {
		expect(roman.convert(8)).toEqual('VIII');
	});

	it('9 should return IX', () => {
		expect(roman.convert(9)).toEqual('IX');
	});

	it('10 should return X', () => {
		expect(roman.convert(10)).toEqual('X');
	});

	it('19 should return XIX', () => {
		expect(roman.convert(19)).toEqual('XIX');
	});

	it('20 should return XX', () => {
		expect(roman.convert(20)).toEqual('XX');
	});

	it('43 should return XLIII', () => {
		expect(roman.convert(43)).toEqual('XLIII');
	});

	it('44 should return XLIV', () => {
		expect(roman.convert(44)).toEqual('XLIV');
	});

	it('45 should return XLV', () => {
		expect(roman.convert(45)).toEqual('XLV');
	});

	it('48 should return XLVIII', () => {
		expect(roman.convert(48)).toEqual('XLVIII');
	});

	it('49 should return XLIX', () => {
		expect(roman.convert(49)).toEqual('XLIX');
	});

	it('50 should return L', () => {
		expect(roman.convert(50)).toEqual('L');
	});

	it('53 should return LIII', () => {
		expect(roman.convert(53)).toEqual('LIII');
	});

	it('54 should return LIV', () => {
		expect(roman.convert(54)).toEqual('LIV');
	});

	it('99 should return XCIX', () => {
		expect(roman.convert(99)).toEqual('XCIX');
	});

	it('100 should return C', () => {
		expect(roman.convert(100)).toEqual('C');
	});

	it('153 should return CLIII', () => {
		expect(roman.convert(153)).toEqual('CLIII');
	});

	it('447 should return CDXLVII', () => {
		expect(roman.convert(447)).toEqual('CDXLVII');
	});

	it('500 should return D', () => {
		expect(roman.convert(500)).toEqual('D');
	});

	it('949 should return CMXLIX', () => {
		expect(roman.convert(949)).toEqual('CMXLIX');
	});

	it('1000 should return M', () => {
		expect(roman.convert(1000)).toEqual('M');
	});

	it('1727 should return MDCCXXVII', () => {
		expect(roman.convert(1727)).toEqual('MDCCXXVII');
	});

	it('3727 should return MMMDCCXXVII', () => {
		expect(roman.convert(3727)).toEqual('MMMDCCXXVII');
	});
});

// Test Greek Convertion
describe('Greek Translator', () => {
	const greek = new NumberConverter('greek');

	it('should return a string', () => {
		expect(typeof greek.convert()).toEqual('string');
	});

	it('0 should return nothing', () => {
		expect(greek.convert()).toEqual('');
	});

	it('1 should return A', () => {
		expect(greek.convert(1)).toEqual('A');
	});

	it('2 should return B', () => {
		expect(greek.convert(2)).toEqual('B');
	});

	it('3 should return Γ', () => {
		expect(greek.convert(3)).toEqual('Γ');
	});

	it('4 should return Δ', () => {
		expect(greek.convert(4)).toEqual('Δ');
	});

	it('5 should return Ε', () => {
		expect(greek.convert(5)).toEqual('Ε');
	});

	it('6 should return Ϛ', () => {
		expect(greek.convert(6)).toEqual('Ϛ');
	});

	it('7 should return Ζ', () => {
		expect(greek.convert(7)).toEqual('Ζ');
	});

	it('8 should return Η', () => {
		expect(greek.convert(8)).toEqual('Η');
	});

	it('9 should return Θ', () => {
		expect(greek.convert(9)).toEqual('Θ');
	});

	it('10 should return Ι', () => {
		expect(greek.convert(10)).toEqual('Ι');
	});

	it('20 should return K', () => {
		expect(greek.convert(20)).toEqual('K');
	});

	it('30 should return Λ', () => {
		expect(greek.convert(30)).toEqual('Λ');
	});

	it('40 should return M', () => {
		expect(greek.convert(40)).toEqual('M');
	});

	it('50 should return N', () => {
		expect(greek.convert(50)).toEqual('N');
	});

	it('60 should return Ξ', () => {
		expect(greek.convert(60)).toEqual('Ξ');
	});

	it('70 should return Ο', () => {
		expect(greek.convert(70)).toEqual('Ο');
	});

	it('80 should return Π', () => {
		expect(greek.convert(80)).toEqual('Π');
	});

	it('90 should return Ϟ', () => {
		expect(greek.convert(90)).toEqual('Ϟ');
	});

	it('100 should return Ρ', () => {
		expect(greek.convert(100)).toEqual('Ρ');
	});

	it('200 should return Σ', () => {
		expect(greek.convert(200)).toEqual('Σ');
	});

	it('300 should return T', () => {
		expect(greek.convert(300)).toEqual('T');
	});

	it('400 should return Y', () => {
		expect(greek.convert(400)).toEqual('Y');
	});

	it('500 should return Φ', () => {
		expect(greek.convert(500)).toEqual('Φ');
	});

	it('600 should return X', () => {
		expect(greek.convert(600)).toEqual('X');
	});

	it('700 should return Ψ', () => {
		expect(greek.convert(700)).toEqual('Ψ');
	});

	it('800 should return Ω', () => {
		expect(greek.convert(800)).toEqual('Ω');
	});

	it('900 should return Ϡ', () => {
		expect(greek.convert(900)).toEqual('Ϡ');
	});

	it('1000 should return ͵Α', () => {
		expect(greek.convert(1000)).toEqual('͵Α');
	});

	it('2000 should return ͵B', () => {
		expect(greek.convert(2000)).toEqual('͵B');
	});

	it('3000 should return ͵Γ', () => {
		expect(greek.convert(3000)).toEqual('͵Γ');
	});
});
