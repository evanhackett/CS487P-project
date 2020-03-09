const { Pool } = require('pg')

// number of concurrent writers
const NUM_WRITERS = 1

const pool = new Pool({
  max: NUM_WRITERS
})

let count = 0

// This still doesn't quite work
// If we can't figure this out use js time instead!

for (let i = 0; i < NUM_WRITERS; i++) {
  const query = `UPDATE ONEMTUP SET string4 = $1 WHERE fiftypercent = $2`

  pool.query(query, ['test', 1], () => {
    count++
    if (count === NUM_WRITERS) pool.end()
  })
}
