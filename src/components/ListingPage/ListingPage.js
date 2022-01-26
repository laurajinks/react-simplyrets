import React from 'react'
import {makeStyles} from '@mui/styles'
import {Layout, useLocalStorage} from '../common'
import {useQuery} from 'react-query'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import {Listing} from './Listing'

const useStyles = makeStyles({
  container: {
    width: '100%',
  },
  listings: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '100%',
    margin: '0 auto'
  }
});

export const ListingPage = () => {
  const classes = useStyles()
  const [listings, setListings] = useLocalStorage('listings')

  const { isLoading, data } = useQuery("listings", async () =>{
    if (!listings) {
    const {data} = await axios.get(
      'https://api.simplyrets.com/properties'
    , {
        auth:
        {
          'username': 'simplyrets',
          'password': 'simplyrets'
        }
      })
      setListings(data)
    return data
    }
  } 
  );

  const toggleFavorite = (id, value) => {
    const updated = listings.map(l => l.listingId === id ? {...l, favorited : value} : l)
    setListings(updated)
  }


  return (
    <Layout title='Property Listings'>
      <div className={classes.container}>
        {isLoading ? <CircularProgress /> : (
          <div className={classes.listings} data-cy="listing-container">
            {(listings || []).map(listing => <Listing key={listing.listingId} {...{listing, toggleFavorite}} />)}
          </div>
        )}
      </div>
    </Layout>
  )
}