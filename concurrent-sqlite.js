const sqlite3 = require('sqlite3').verbose()

const db_filename = './project.db'
const db = new sqlite3.Database(db_filename)

// number of concurrent writers
const NUM_WRITERS = 1

db.parallelize(function() {
  for (let i = 0; i < NUM_WRITERS; i++) {
    const query = `UPDATE ONEMTUP SET string4 = ? WHERE fiftypercent = 1`
    db.run(query, 'test', i)
  }
})

db.close()
