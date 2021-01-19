import { Router, Request, Response } from 'express'
import { uploadImage } from '../services/imgbbService'
import multer from 'multer'
const upload = multer()

const imgbbRouter: Router = Router()

imgbbRouter.get('/', async (req: Request, res: Response) => {
  res.send('Okay from imgbbRouter')
})

imgbbRouter.post('/uploadImage', upload.single('image'), async (req: Request, res: Response) => {
  const file = (req as any).file.buffer.toString('base64')
  const response = await uploadImage(file).catch(err => {
    console.error('upload image err', err)
  })
  console.log(response)
  res.send('Okay from upload image')
})

export default imgbbRouter