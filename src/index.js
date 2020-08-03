import React from 'react'
import styles from './styles.module.css'
import App from "./App"
export const ExampleComponent = ({ props }) => {
  return <App  {...props} />
}
