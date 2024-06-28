const { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  it('handles 2:00pm', () => {
    const timeInWords = convertTimeToWords('2:00');
    expect(timeInWords).toBe("two o'clock");
  })

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('handles 2:37', () => {
    const timeInWords = convertTimeToWords('2:37');
    expect(timeInWords).toBe('twenty-three to three');
  })

  it('handles 2:03', () => {
    const timeInWords = convertTimeToWords('2:03');
    expect(timeInWords).toBe('three past two');
  })

  it('handles 12:45', () => {
    const timeInWords = convertTimeToWords('12:45');
    expect(timeInWords).toBe('quarter to one');
  })
});
