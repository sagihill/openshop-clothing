import React, { Component } from 'react';
import './directory.style.scss'
import {sections} from './directory.data'
import MenuItem from '../menu-item/menu-item.component'

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