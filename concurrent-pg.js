const { Pool } = require('pg')

// number of concurrent writers
const NUM_WRITERS = 50

const pool = new Pool({
  max: NUM_WRITERS
})

for (let i = 0; i < NUM_WRITERS; i++) {
  const query = `UPDATE table1 SET string4 = $1 WHERE onepercent = $2`

  pool.query(query, ['test', i])
}

pool.end()
