const range = require('lodash').range
const shuffle = require('lodash').shuffle

const NUM_ROWS = 10000

const availableValues = shuffle(range(0, NUM_ROWS))

const getUnique = () => availableValues.pop()

const string4Options = [
  'AAAA' +
    Array(48)
      .fill('x')
      .join(''),
  'HHHH' +
    Array(48)
      .fill('x')
      .join(''),
  'OOOO' +
    Array(48)
      .fill('x')
      .join(''),
  'VVVV' +
    Array(48)
      .fill('x')
      .join('')
]

// const getString = () => {
//   const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V']

//   const result = []

//   alpha.forEach(ch1 => {
//     alpha.forEach(ch2 => {
//       alpha.forEach(ch3 => {
//         result.push(`${ch1}xxxxxxxxxxxxxxxxxxxxxxxxx${ch2}xxxxxxxxxxxxxxxxxxxxxxxx${ch3}`)
//       })
//     })
//   })

//   return result
// }

const convert = unique => {
  let tmp = ['A', 'A', 'A', 'A', 'A', 'A', 'A']
  let result = ['A', 'A', 'A', 'A', 'A', 'A', 'A']
  let i = 6
  let cnt = 0
  let rem = -1
  while (unique > 0) {
    rem = Math.round(unique % 26)
    tmp[i] = String.fromCharCode('A'.charCodeAt(0) + rem)
    unique = Math.floor(unique / 26)
    i = i - 1
    cnt = cnt + 1
  }
  for (let j = 0; j <= cnt; j++, i++) result[j] = tmp[i]
  return result.concat(Array(45).fill('x')).join('')
}

console.log(
  'unique1,unique2,two,four,ten,twenty,onePercent,tenPercent,twentyPercent,fiftyPercent,unique3,evenOnePercent,oddOnePercent,stringu1,stringu2,string4'
)

for (let i = 0; i < NUM_ROWS; i++) {
  const unique1 = getUnique()
  const unique2 = i
  const two = unique1 % 2
  const four = unique1 % 4
  const ten = unique1 % 10
  const twenty = unique1 % 20
  const onePercent = unique1 % 100
  const tenPercent = unique1 % 10
  const twentyPercent = unique1 % 5
  const fiftyPercent = unique1 % 2
  const unique3 = unique1
  const evenOnePercent = onePercent * 2
  const oddOnePercent = evenOnePercent + 1
  const stringu1 = convert(unique1)
  const stringu2 = convert(unique2)
  const string4 = string4Options[i % 4]

  const csvRow = `${unique1},${unique2},${two},${four},${ten},${twenty},${onePercent},${tenPercent},${twentyPercent},${fiftyPercent},${unique3},${evenOnePercent},${oddOnePercent},${stringu1},${stringu2},${string4}`

  console.log(csvRow)
}
