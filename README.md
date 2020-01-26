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

To see the command to create the table (the schema file), see `table1.schema`.

To see the result of an example query, see `output-sqlite.txt`. The query ran was:

```
sqlite> select * from TABLE1
...     WHERE unique1 < 50;
```
