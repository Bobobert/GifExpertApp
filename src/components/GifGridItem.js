import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({id, title, url}) => {

    const handleCopy = () => {
        navigator.clipboard.writeText(`https://giphy.com/embed/${id}`).then(
        console.log(`Copied to clipboard ${title} !`));
    }

    return (
        <div className="card animate__animated animate__fadeInDown animate__fast" 
            onClick={handleCopy} data-testid='GifGridItem'>
            <img src={ url } alt={ title }/>
            <div className='overlay'>
                <div className='text'>
                    This GIF!<br/>{title}
                </div>
            </div>

        </div>
    )
}
// extracted more info and style from this https://www.w3schools.com/css/css3_images.asp

GifGridItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
