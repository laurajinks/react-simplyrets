import React, {useState, useEffect} from 'react'
import {makeStyles} from '@mui/styles'
import {Layout} from '../common'
import {useQuery} from 'react-query'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import {Listing} from './Listing'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  }
});

export const ListingPage = () => {
  const classes = useStyles()

  const { isLoading, data } = useQuery("listings", async () =>{
    const {data} = await axios.get(
      'https://api.simplyrets.com/properties'
    , {
        auth:
        {
          'username': 'simplyrets',
          'password': 'simplyrets'
        }
      })
    console.log('res', data)
    return data
  } 
  );


  return (
    <Layout title='Property Listings'>
      <div className={classes.container}>
        {isLoading ? <CircularProgress /> : (
          <>
            {data.map(listing => <Listing key={listing.listingId} {...{listing}} />)}
          </>
        )}
      </div>
    </Layout>
  )
}