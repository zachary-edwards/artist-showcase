import axios, { AxiosRequestConfig } from 'axios'
import FormData from 'form-data'

const apiKey = process.env.IMGBB_API_KEY

export const uploadImage = async (image: string) => {
  const bodyFormData = new FormData();
  bodyFormData.append('image', image)

  const config: AxiosRequestConfig = {
    method: 'POST',
    headers: bodyFormData.getHeaders(),
    data: bodyFormData
  }

  const res = await axios(`https://api.imgbb.com/1/upload?key=${apiKey}`,
    config
  ).catch(err => {
    console.error('Error uploading image', err.response.data)
    return err
  })

  return res;
}