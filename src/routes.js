import { Route, Navigate } from "react-router-dom";
import {ListingPage} from './components/ListingPage'

export const routes = [
  <Route path="/listings" element={<ListingPage />}/>,
  <Route path="/" element={<Navigate replace to="/listings" />} />
]