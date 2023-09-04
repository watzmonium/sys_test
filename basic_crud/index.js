import express from 'express'
const app = express()
import cors from 'cors'
const PORT = 5173
app.use(express.static('dist'))
app.use(cors)
app.listen(PORT, () => console.log(`listening on ${PORT}`))