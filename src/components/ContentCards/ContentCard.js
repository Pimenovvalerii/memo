import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../app/actions';

import { Alert } from 'antd';
import './styles.scss';

const ContentCard = ({data,id}) => {

    const dispatch = useDispatch();
    const delePost = useSelector( (state) => state.ui.delePost)
    const deletePostHandler = () => {
        dispatch(deletePost(data.id))
    }
    return (
        <div className='content-card'>
            {delePost &&  <div className='error'>
                <Alert
                    message={delePost}
                    type="error"
                    showIcon/>
                </div> 
            }
            <img src='' alt='img'/>
            <p>{data.title}</p>
            <p>
                {data.date}
            </p>
            <button onClick={ deletePostHandler}>delete</button>
        </div>
    )
}

export default ContentCard;