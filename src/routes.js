import { Route, Navigate } from "react-router-dom";
import {ListingPage} from './components/ListingPage'

export const routes = [
  <Route key='listings' path="/listings" element={<ListingPage />}/>,
  <Route key='/' path="/" element={<Navigate replace to="/listings" />} />
]