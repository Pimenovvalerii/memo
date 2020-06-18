import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createPosts, showAlert } from '../../app/actions';
import { Alert, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';



import './styles.scss';

const FormDate = () => {
    const dispatch = useDispatch();
    const alert = useSelector( ( state) => state.ui.alert)
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('submit')
        const obj = {};
        obj.title = title;
        obj.date = date;
        obj.id = Date.now().toString();

        if(!title.length || !date.length) {
            console.log('пустая строка')
            dispatch(showAlert('пустая строка'))
            return
        }

        dispatch(createPosts(obj))
        setTitle('')
        setDate('')
    }

    const changeTitleHandler = (event) => {
        setTitle(event.target.value)
    }
    const changeDateHandler = (event) => {
        setDate(event.target.value)
    }

    const fileList = [
        // {
        //   uid: '-1',
        //   name: 'xxx.png',
        //   status: 'done',
        //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        //   thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        // },
        // {
        //   uid: '-2',
        //   name: 'yyy.png',
        //   status: 'error',
        // },
      ];

    const props = {
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        listType: 'picture',
        defaultFileList: [...fileList],
    };

    return (
        <form 
            onSubmit={submitHandler}
            className='form-date'
        >
            {alert &&  <div className='error'>
                <Alert
                    message={alert}
                    type="error"
                    showIcon/>
                </div> 
            }
            <label>Имя</label>
            <input 
                type='text'
                value={title}
                onChange={changeTitleHandler}
                id='title'
            />
            <label>Фамилия</label>
            <input 
                type='text'
                value={date}
                onChange={changeDateHandler}
                id='date'
            />
            {/* <div>
                <span>Загрузить картинку</span>
                <Upload {...props}>
                    <Button>
                        <UploadOutlined />
                    </Button>
                </Upload>
            </div> */}
           
            <button type='submit'>Создать</button>
        </form>
    )
}

export default FormDate;