import React, {useState, useEffect} from 'react'
import {makeStyles} from '@mui/styles'
import {Typography} from '@mui/material'
import {priceFormatter} from '../../utils'
import moment from 'moment'
import {FavoriteIcon, UnfavoriteIcon} from '../common'

const useStyles = makeStyles((theme) => ({
  listingContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(1),
    marginBottom: theme.spacing(3),
    textWrap: 'wrap',
    width: 250,
    alignItems: 'center',
    position: 'relative'
  },
  image: {
    width: 240,
    height: 200,
    objectFit: 'cover'
  },
  bold: {
    fontWeight: 'bold !important'
  },
  gray: {
    color: '#888 !important'
  },
  textContainer: {
    width: 240,
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 15,
    zIndex: 1
  }
}));

export const Listing = ({listing, toggleFavorite}) => {
  const classes = useStyles()
  const {property, address, favorited = false} = listing

  const handleClick = () => toggleFavorite(listing.listingId, !favorited)

  return (
<div className={classes.listingContainer}>
  <div className={classes.icon} onClick={handleClick}>{favorited ? <FavoriteIcon /> : <UnfavoriteIcon />}</div>
  <img src={listing.photos[0]} alt={listing.listingId} className={classes.image}/>
  <div className={classes.textContainer}>
    <Typography>{property.bedrooms} BR | {(property.bathsFull || 0) + (.5 * (property.bathsHalf || 0))} Bath | {property.area}Sq FT</Typography>
    <Typography variant='h6' className={classes.bold}>{priceFormatter(listing.listPrice)}</Typography>
    <Typography variant='caption'>{address.streetNumber} {address.streetName}, {address.city}, {address.state}</Typography><br />
    <Typography variant='caption' className={classes.gray}>Listed {moment(listing.listDate).format('MM/DD/YY')}</Typography>
  </div>
</div>
  )
}