import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import imgbbRouter from './routes/imgbbRouter';

const app = express()
app.use(helmet())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json({ limit: '100mb'}))
const port = 3010;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('This is all running off of one script')
})

app.use('/imgbb', imgbbRouter)

app.listen(port, () => {
  console.log('Server started on', port)
})