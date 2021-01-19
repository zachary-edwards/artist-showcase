import axios from 'axios'
import React, { useState } from 'react'

export default function About(props: any) {
  const [file, setFile] = useState<undefined | string | Blob>()

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log('submitting')
  }

  const handleOnChange = (event: any) => {
    setFile(event.target.files[0])
  }

  const handleUpload = (event: any) => {
    console.log(file)
    if (file) {
      const formData = new FormData()

      formData.append('image', file)
      console.log(formData)
      axios.post('http://localhost:3010/imgbb/uploadImage', formData).catch(err => {
        console.error('uh oh', err)
      })
    }
  }
  return (<>
    <label htmlFor="fileUpload">Drop file</label>
    <input id="fileUpload" name="fileUpload" type="file" accept="image/*" onChange={handleOnChange} />
    <button onClick={handleUpload}>Upload</button>
  </>)
}