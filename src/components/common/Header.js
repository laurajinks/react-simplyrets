import React from 'react'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    background: `#dedede`,
    position: '-webkit-sticky',
    position: 'sticky',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

export const Header = ({title}) => {
  const classes = useStyles()

  return (
    <div className={classes.headerContainer}>
      {title}
    </div>
  )
}