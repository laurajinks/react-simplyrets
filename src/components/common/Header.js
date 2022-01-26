import React from 'react'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    background: `#dedede`,
    position: 'fixed',
    top: 0,
    width: '100%',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    zIndex: 2
  }
}));

export const Header = ({title}) => {
  const classes = useStyles()

  return (
    <div data-cy="header" className={classes.headerContainer}>
      {title}
    </div>
  )
}