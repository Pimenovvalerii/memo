import React from 'react';
import ContentCards from '../ContentCards';
import MainSlider from '../Sliders/MainSlider';

import './styles.scss';

const Content = () => {
    return (
        <div className='contents'>
            <div className='block-2'>
                <MainSlider />
            </div>
            <div className='block-1'>
                <ContentCards />
            </div>
        </div>
    )
}

export default Content;