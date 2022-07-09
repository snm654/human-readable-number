module.exports = function toReadable(number) {
    number += ''
    let singleNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let tenPerNineteen = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }
    let twentyPerNinety = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let nSplit = number.split('')

    for (let i = 0; i < nSplit.length; i += 1) {
        let resultOne = ''

        if (number.length === 1) {
            if (number[i] === '0') {
                resultOne += singleNumber[i]
            } else if (number[i] === '1') {
                resultOne += singleNumber[number]
            } else if (number[i] === '2') {
                resultOne += singleNumber[number]
            }
            else if (number[i] === '3') {
                resultOne += singleNumber[number]
            }
            else if (number[i] === '4') {
                resultOne += singleNumber[number]
            }
            else if (number[i] === '5') {
                resultOne += singleNumber[number]
            }
            else if (number[i] === '6') {
                resultOne += singleNumber[number]
            }
            else if (number[i] === '7') {
                resultOne += singleNumber[number]
            }
            else if (number[i] === '8') {
                resultOne += singleNumber[number]
            }
            else if (number[i] === '9') {
                resultOne += singleNumber[number]
            }

            return resultOne

        } else if (number.length === 2) {
            if (number === '10') {
                return tenPerNineteen[number]
            }
            if (number === '11') {
                return tenPerNineteen[number]
            }
            if (number === '12') {
                return tenPerNineteen[number]
            }
            if (number === '13') {
                return tenPerNineteen[number]
            }
            if (number === '14') {
                return tenPerNineteen[number]
            }
            if (number === '15') {
                return tenPerNineteen[number]
            }
            if (number === '16') {
                return tenPerNineteen[number]
            }
            if (number === '17') {
                return tenPerNineteen[number]
            }
            if (number === '18') {
                return tenPerNineteen[number]
            }
            if (number === '19') {
                return tenPerNineteen[number]
            }
            if (number === '20') {
                return twentyPerNinety[number[i]]
            }

            if (nSplit.length === 2 && nSplit[0] === number[0]) {
                if (nSplit[1] === '0') return `${twentyPerNinety[nSplit[0]]}`
                else return twentyPerNinety[nSplit[0]] + ' ' + singleNumber[nSplit[1]].replace('zero', '')
            }
        } else if (nSplit.length === 3) {
            if (nSplit[1] + nSplit[2] === '10') return singleNumber[nSplit[0]] + ' hundred ' + tenPerNineteen[nSplit[1] + nSplit[2]]
            if (nSplit[1] + nSplit[2] === '11') return singleNumber[nSplit[0]] + ' hundred ' + tenPerNineteen[nSplit[1] + nSplit[2]]
            if (nSplit[1] + nSplit[2] === '12') return singleNumber[nSplit[0]] + ' hundred ' + tenPerNineteen[nSplit[1] + nSplit[2]]
            if (nSplit[1] + nSplit[2] === '13') return singleNumber[nSplit[0]] + ' hundred ' + tenPerNineteen[nSplit[1] + nSplit[2]]
            if (nSplit[1] + nSplit[2] === '14') return singleNumber[nSplit[0]] + ' hundred ' + tenPerNineteen[nSplit[1] + nSplit[2]]
            if (nSplit[1] + nSplit[2] === '15') return singleNumber[nSplit[0]] + ' hundred ' + tenPerNineteen[nSplit[1] + nSplit[2]]
            if (nSplit[1] + nSplit[2] === '16') return singleNumber[nSplit[0]] + ' hundred ' + tenPerNineteen[nSplit[1] + nSplit[2]]
            if (nSplit[1] + nSplit[2] === '17') return singleNumber[nSplit[0]] + ' hundred ' + tenPerNineteen[nSplit[1] + nSplit[2]]
            if (nSplit[1] + nSplit[2] === '18') return singleNumber[nSplit[0]] + ' hundred ' + tenPerNineteen[nSplit[1] + nSplit[2]]
            if (nSplit[1] + nSplit[2] === '19') return singleNumber[nSplit[0]] + ' hundred ' + tenPerNineteen[nSplit[1] + nSplit[2]]
            if (nSplit[1] + nSplit[2] === '20') return singleNumber[nSplit[0]] + ' hundred ' + twentyPerNinety[nSplit[1]]
            if (nSplit[1] + nSplit[2] === '30') return singleNumber[nSplit[0]] + ' hundred ' + twentyPerNinety[nSplit[1]]
            if (nSplit[1] + nSplit[2] === '40') return singleNumber[nSplit[0]] + ' hundred ' + twentyPerNinety[nSplit[1]]
            if (nSplit[1] + nSplit[2] === '50') return singleNumber[nSplit[0]] + ' hundred ' + twentyPerNinety[nSplit[1]]
            if (nSplit[1] + nSplit[2] === '60') return singleNumber[nSplit[0]] + ' hundred ' + twentyPerNinety[nSplit[1]]
            if (nSplit[1] + nSplit[2] === '70') return singleNumber[nSplit[0]] + ' hundred ' + twentyPerNinety[nSplit[1]]
            if (nSplit[1] + nSplit[2] === '80') return singleNumber[nSplit[0]] + ' hundred ' + twentyPerNinety[nSplit[1]]
            if (nSplit[1] + nSplit[2] === '90') return singleNumber[nSplit[0]] + ' hundred ' + twentyPerNinety[nSplit[1]]
            if (nSplit[1] === '0' && nSplit[2] === '0') return `${singleNumber[nSplit[0]]} hundred`
            if (nSplit[1] === '0') return `${singleNumber[nSplit[0]]} hundred${twentyPerNinety[nSplit[1]]} ${singleNumber[nSplit[2]].replace('zero', '')}`

            return singleNumber[nSplit[0]] + ' hundred ' + twentyPerNinety[nSplit[1]] + ' ' + singleNumber[nSplit[2]].replace('zero', '')
        }
    }
}
