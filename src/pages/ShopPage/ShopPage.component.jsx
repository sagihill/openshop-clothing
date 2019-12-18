import React, { Component } from 'react';
import { collections } from './ShopPage.data'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component';

class ShopPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            collections: collections
        }
    }
    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        ) 
    }
}

export default ShopPage;