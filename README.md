# CS487P-project
Database Benchmark Project for CS487P

We chose to use sqlite and postgresql as our systems to benchmark. We chose these systems simply because they are the main databases we have experience using.

To populate the databases with data, we wrote a script for generating a csv file called `generate_csv.js`. We chose javascript (nodejs) as our language since we both prefer it.

To run the script, first dependencies need to be installed (using node package manager):

```
$ npm i lodash
```

Then the script can be ran to create the csv file:

```
$ node generate_csv.js > data.csv
```

To load the csv file into sqlite:

```
sqlite> .mode csv
sqlite> .import data.csv table1
```

To load the csv file into postgresql:

```
testdb=# Copy TABLE1 FROM 'data.csv' DELIMITER ',' CSV HEADER;
```

To see the command to create the table (the schema file), see `table1.schema`.

To see the result of an example sqlite query, see `output-sqlite.txt`. The query ran was:

```
sqlite> select * from TABLE1
...     WHERE unique1 < 50;
```

To see the result of the following postgresql example query, see `output-postgresql.txt`

```
testdb=# SELECT * FROM table1 WHERE unique1 < 50
```

## Lessons learned / issues encountered

One issue we encountered was when we originally imported the csv file into sqlite, all of our columns had type TEXT. We didn't know that, so our queries were returning confusing results. For example, running:

```
sqlite> select * from TABLE1
...     WHERE unique1 < 50;
```

returned rows where unique1 was greater than 50, which made no sense at first. Once we realized that unique1 was TEXT instead of integer, we knew we needed to create a proper schema to set the types.

Another issue we had was converting the 'convert(unique)' function from c to javascript. Even with the comments they added it was hard to get our heads around what they were doing. 
