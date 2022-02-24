import 'dotenv/config'
import 'colorts/lib/string'
import express from 'express'

const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
	console.log(`🚀 Server is running at http://localhost:${PORT}`.cyan)
})
