const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)
const sql = `INSERT INTO people(name) values('Fulano')`
const sqlSelect = `SELECT name FROM people`
connection.query(sql)


app.get('/', (req, resp) => {
    
    connection.query(`SELECT name FROM people`, (error, results, fields) => {
        resp.send(
          '<h1>Full Cycle Rocks!</h1>' + 
          '<ul>' +
            (results.length > 0 ? results.map(row => '<li>' + row.name + '</li>').join('') : '')
          + '</ul>'
        )
      })
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})