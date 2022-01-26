import React from 'react'
import {makeStyles} from '@mui/styles'
import {Header} from './Header'

const useStyles = makeStyles((theme) => ({
  children: {
    padding: `0 ${theme.spacing(2)}`
  }
}));

export const Layout = ({title, children}) => {
  const classes = useStyles()

  return (
    <>
      <Header {...{title}} />
      <div className={classes.children}>
        {children}
      </div>
    </>
  )
}