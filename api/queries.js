const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  password: 'Goobyboy',
  host: 'localhost',
  database: 'codeProblems',
})

const getProblems = async (req, res) => {
  try {
    const response = await pool.query(`SELECT * FROM problems AS p
    ORDER BY p.id DESC`)
    res.status(200).json(response.rows)
  } catch(error) {
    console.log(error)
    throw error
  }
}

module.exports = {
  getProblems
}

// JOIN problemTag AS pt ON p.id = pt.problem_id
// JOIN tags AS t on pt.tag_id = t.id

// const result = await pool.query('SELECT $1::text as name', ['brianc'])
// console.log(result.rows[0].name) // brianc