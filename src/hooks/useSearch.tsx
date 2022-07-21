import React from 'react'
import { searchMedia } from '../api/api'
import { ResultHandler } from '../interfaces/ResultHandler'
import {useQuery} from '@tanstack/react-query'

interface UseSearchProps extends ResultHandler {
  query:string
}

export const useSearch = ({ onSuccess, onError,query }: UseSearchProps) => {
    
  const queryData = useQuery(['search', query], () => searchMedia(query), {
    onError: (err: Error) => {
      onError?.(err)
    },
    onSuccess: () => {
      onSuccess?.()
    },
    enabled: query.length > 2,
  }
    
  )
  
    
  return queryData
}



