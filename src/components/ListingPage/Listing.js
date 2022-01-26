import React, {useState, useEffect} from 'react'
import {makeStyles} from '@mui/styles'
import {priceFormatter} from '../../utils'
import moment from 'moment'

const useStyles = makeStyles({
  listingContainer: {}
});

export const Listing = ({listing}) => {
  const classes = useStyles()
  const {property} = listing


  return (
<div className={classes.listingContainer}>
  <img src={listing.photos[0]} alt={listing.listingId} />
  {property.bedrooms} BR | {(property.bathsFull || 0) + (.5 * (property.bathsHalf || 0))} Bath | {property.area}Sq FT
  {priceFormatter(listing.listPrice)}
  {property.address}
  Listed {moment(listing.listDate).format('MM/DD/YY')}
    </div>
  )
}