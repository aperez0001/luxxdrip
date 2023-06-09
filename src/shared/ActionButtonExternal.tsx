import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types'

type Props = {
    children: React.ReactNode
}

const ActionButtonExternal = ({ children }: Props) => {
  return (
    
    <a href="https://luxxdrip.intakeq.com/booking" target='_blank'>
      <button
          className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-secondary-600'
      >
          {children}
      </button>
    </a>
  )
}

export default ActionButtonExternal