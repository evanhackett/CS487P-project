const sqlite3 = require('sqlite3').verbose();

const db_filename = './test.db'
const db = new sqlite3.Database(db_filename);

// number of concurrent writers
const NUM_WRITERS = 1

db.parallelize(function() {
  for (let i = 0; i < NUM_WRITERS; i++) {
      const query = `UPDATE table1 SET string4 = ? WHERE onepercent = ?`    
      db.run(query, 'hello', i)
  }
});



db.close()