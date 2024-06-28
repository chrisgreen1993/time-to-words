

const hourToWords = ['midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'midday']
const minutesToWords = ["o'clock", 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirtenen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty-one', 'twenty-two', 'twenty-three', 'twenty-four', 'twenty-five', 'twenty-six', 'twenty-seven', 'twenty-eight', 'twenty-nine', 'half']

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const [hour, minute] = time.split(':').map(Number)

  const hourText = hourToWords[hour % 12]
  const minuteText = minutesToWords[minute]

  if (hour === 0 && minute === 0) return 'midnight'
  if (hour === 12 && minute === 0) return 'midday'

  if (minute === 0) {
    return `${hourText} o'clock`
  } else if (minute <= 30) {
    return `${minuteText} past ${hourText}`
  } else {
    const remainingMinutesText = minutesToWords[60 - minute]
    const nextHourText = hourToWords[(hour + 1) % 12]
    return `${remainingMinutesText} to ${nextHourText}`
  }

}

module.exports = { convertTimeToWords };