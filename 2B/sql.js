const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('test.db');
// Database included should be similiar to the shown DB

let sql = 'SELECT people.first_name ||" "|| people.last_name AS name, GROUP_CONCAT( DISTINCT phones.number) AS combinednumbers FROM people LEFT JOIN phones ON people.id = phones.user_id GROUP BY name ORDER BY people.last_name ASC';

db.each(sql , (err, row) => {
if (err) console.log(err);
console.log(row.name +": " + row.combinednumbers);
});
// Could use some fancier output, not in the scope of the challenge

db.close();