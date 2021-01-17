import express from 'express'

const app = express()
const port = 3010

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('This is all running off of one app!!')
})

app.listen(port, () => {
  console.log('Server started on ', port)
})