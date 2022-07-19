import React from 'react'
import { MediaList } from '../api/api'

interface InputProps {
  itemData: MediaList
}

const MediaFrame = (props: InputProps) => {
  
  return (
    <div>
      {props.itemData.title}
    </div>
  )
}

export default MediaFrame