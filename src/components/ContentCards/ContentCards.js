import React from 'react';
import {useSelector} from 'react-redux';
import ContentCard from './ContentCard';

import './styles.scss';

const ContentCards = () => {
    const posts = useSelector( (state) => state.data.posts)
    const cards = posts.map( (el,id) =>  <ContentCard data={el} id={id} key={id}/>)

    if(!posts.length) {
        return <p className='content-cards'>Постов нет</p>
    }
    
    return (
        <div className='content-cards'>
            {cards}
        </div>
    )
}

export default ContentCards;