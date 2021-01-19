import { Router, Request, Response } from 'express'
import { uploadImage } from '../services/imgbbService'
//@ts-ignore
import dababy from './dababy.jpg'
import fs from 'fs'

const imgbbRouter: Router = Router()

imgbbRouter.get('/', async (req: Request, res: Response) => {
  res.send('Okay from imgbbRouter')
})

imgbbRouter.post('/uploadImage', async (req: Request, res: Response) => {
  const response = await uploadImage(req.body.image).catch(err => {
    console.error('upload image err', err)
  })
  console.log(response)
  res.send('Okay from upload image')
})

export default imgbbRouter