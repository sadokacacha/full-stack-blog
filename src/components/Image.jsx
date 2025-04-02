import { IKImage } from 'imagekitio-react'
import React from 'react'

const Image = ({src , className}) => {
  return (
    <IKImage  
    urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL}
    path={src}
    alt="" 
    className={className}
     />
  )
}

export default Image
