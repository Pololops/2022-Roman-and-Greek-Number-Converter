class RomanConverter {
	baseNumber = 0;
	romanNumber: string[] = [];

	combinations: {
    M: number;
    CM: number;
    D: number;
    CD: number;
    C: number;
    XC: number;
    L: number;
    XL: number;
    X: number;
    IX: number;
    V: number;
    IV: number;
    I: number;
  } = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1,
	};

	init(nb: number) {
		this.baseNumber = nb;
		this.romanNumber = [];
	}

	convert(nb: number) {
		if (!nb) return '';

		this.init(nb);

		this.transcodeToRoman();
		return this.romanNumber.join('');
	}

	transcodeToRoman() {
		while (this.baseNumber > 0) {
			Object.entries(this.combinations).forEach(
				([key, value], index, array) => {
					if (this.baseNumber >= value) {
						this.romanNumber = [...this.romanNumber, key];
						this.baseNumber -= value;
						array.length = index + 1;
					}
				},
			);
		}
	}
}

export default RomanConverter;
