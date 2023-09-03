const app = require('./app')
const PORT = 3001

console.log(app)
app.listen(PORT, () => console.log(`listening on port ${PORT}`))