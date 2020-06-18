import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';

import ContentCard from '../ContentCards/ContentCard';
import Slider from "react-slick";
import './styles.scss';

const MainSlider = () => {
  const posts = useSelector( (state) => state.data.posts);
  const cards = posts.map( (el,id) =>  <ContentCard data={el} id={id} key={id}/>)
  // const [nav1, setNav1] = useState();
  // const [nav2, setNav2] = useState();
  // const slider1 = useRef(null);
  // const slider2 = useRef(null);

  //i dont seem to need this
  // useEffect(() => {
  //   // setNav1(slider1.current);
  //   // setNav2(slider2.current);
  // }, []);
  let length = cards.length
  useEffect( ()=> {
    console.timeLog(cards.length,'cards.length')
    if(length > 3) {
      length = 3
    }
  },[cards])

  useEffect( ()=> {
    console.log('sfsfsfsdf')
    console.log(length,'length')
  })
  return (
    <div className='main-slider'>
      <Slider
        // asNavFor={nav1}
        // ref={slider2}
        slidesToShow={1}
        swipeToSlide={true}
        focusOnSelect={true}
      >
       {cards.length ? cards : <div>Not cards</div>}
      </Slider>
    </div>
  );
};

export default MainSlider;
