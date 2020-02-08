import {openDatabase} from 'react-native-sqlite-storage';
const db = openDatabase({name: 'Db_Teste.db'});

class User {
  findAll() {
    const users = [];

    db.transaction(tran => {
      tran.executeSql(
        'SELECT * FROM users ORDER BY name',
        [],
        (xn, results) => {
          for (let i = 0; i < results.rows.length; i++) {
            users.push(results.rows.item(i));
          }
        },
      );
    });

    return users;
  }

  find({where}) {
    const users = [];

    const {id, name, email} = where;

    var query = 'SELECT * FROM users WHERE 1 = 1 ';

    if (id) {
      query += ` AND id = ${id}`;
    }

    if (name) {
      query += ` AND name = '${name}'`;
    }

    if (email) {
      query += ` AND email = '${email}'`;
    }

    query += ' ORDER BY name';

    console.tron.log(query);

    db.transaction(tran => {
      tran.executeSql(query, [], (xn, results) => {
        console.tron.log({users: results.rows.length});
        for (let i = 0; i < results.rows.length; i++) {
          users.push(results.rows.item(i));
        }
      });
    });

    return users;
  }

  create(name, email) {
    db.transaction(tran => {
      tran.executeSql(
        `CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name VARCHAR(5) NOT NULL,
          email VARCHAR(5) NOT NULL UNIQUE
        )`,
        [],
      );
    });

    db.transaction(tran => {
      tran.executeSql('INSERT INTO users(name, email) VALUES(?,?)', [
        name,
        email,
      ]);
    });
  }

  drop() {
    db.transaction(tran => {
      tran.executeSql('DROP TABLE users ', []);
    });
  }
}

export default new User();
