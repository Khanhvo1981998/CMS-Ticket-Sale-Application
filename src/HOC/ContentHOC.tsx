import React from 'react'
import { useSelector } from 'react-redux'

interface RootState {
    ContentReducer: {
      Component: React.ReactNode
    }
  }
type Props = {}

export default function ContentHOC({}: Props) {
    const { Component } = useSelector((state: RootState)  => state.ContentReducer)
    return <div className='mr-4'>{Component}</div>
}