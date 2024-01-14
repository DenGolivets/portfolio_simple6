import React from 'react';
import './descriptionBox.css';

function DescriptionBox() {
    return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-navbox">
                Description
            </div>
            <div className="descriptionbox-navbox fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>
                Adipisicing dolore velit ex in eu proident. Enim deserunt cupidatat ullamco sit tempor officia ullamco aliquip sunt. 
                In esse laboris aliquip commodo adipisicing. Ea enim reprehenderit duis dolore proident quis fugiat cillum deserunt. 
                Cillum ex est proident quis aliquip duis.
            </p>
            <p>
                Adipisicing cupidatat ullamco veniam pariatur nostrud deserunt quis. 
                Tempor Lorem ex cillum voluptate occaecat deserunt aliqua eu exercitation non laboris ea. 
            </p>
        </div>
    </div>
    )
}

export default DescriptionBox;