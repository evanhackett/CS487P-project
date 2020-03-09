const { Pool } = require('pg')
const pool = new Pool()


// number of concurrent writers
const NUM_WRITERS = 1

for (let i = 0; i < NUM_WRITERS; i++) {
  const query = `UPDATE table1 SET string4 = $1 WHERE onepercent = $2`    

  pool.query(query, ["hello", i])
}
