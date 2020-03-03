import React from "react";
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview.component';
import CollectionPage from '../CollectionPage/CollectionPage.component';
import { Route } from "react-router-dom";

//The shop page renders the collection overview
// If a perticular collection is routed the shop page renders it instead of the overview
const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
