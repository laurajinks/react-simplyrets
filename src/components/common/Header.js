import React from 'react'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
  layoutContainer: {}
});

export const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.layoutContainer}>
      {children}
    </div>
  )
}