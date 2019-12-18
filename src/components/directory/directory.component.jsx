import React, { Component } from 'react';
import './Directory.style.scss'
import {sections} from './Directory.data'
import MenuItem from '../MenuItem/MenuItem.component'

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: sections
        }
    }
    render() {
        return (
            <div className='directory-menu'> 
                {
                    this.state.sections.map(({ id, ...otherSectionProps}) => (
                        <MenuItem key = {id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }

}

export default Directory;