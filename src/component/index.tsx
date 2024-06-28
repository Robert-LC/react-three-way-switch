import React, { useState } from 'react'

interface Label<T> {
  title: String
  value: T
}

interface Props<T> {
  labels: [Label<T>, Label<T>, Label<T>]
  defaultPosition?: 'left' | 'center' | 'right'
  disabled: boolean
}

const ThreeWaySwitch: <T>(props: Props<T>) => JSX.Element = (props) => {
  const [togglePosition, setTogglePosition] = useState(props.defaultPosition || 'left')

  return (
    <div className='switch-container'>
      <input defaultChecked id='left-option' type='radio' />
      <label htmlFor='left-option'>
        <h4>Left</h4>
      </label>

      <input id='center-option' type='radio' />
      <label htmlFor='center-option'>
        <h4>Center</h4>
      </label>

      <input id='right-option' type='radio' />
      <label htmlFor='right-option'>
        <h4>Right</h4>
      </label>
    </div>
  )
}

export default ThreeWaySwitch
