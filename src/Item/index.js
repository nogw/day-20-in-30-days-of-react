import React, { useRef, useState } from 'react';
import gif from './gif.gif'
import { Container, Image } from './styles';

function Item() {
  const [isResize, setIsResize] = useState(false)
  const focusEl = useRef()

  const resize = () => {
    if (isResize) {
      focusEl.current.style.height = '300px'
      focusEl.current.style.width = '250px'
      focusEl.current.style.borderRadius = '0px'
      focusEl.current.style.borderTopLeftRadius = '10px'
      focusEl.current.style.borderTopRightRadius = '10px'
      console.log('ss')
      setIsResize(!isResize)
    } else {
      focusEl.current.style.height = '200px'
      focusEl.current.style.width = '200px'
      focusEl.current.style.borderRadius = '10px'
      setIsResize(!isResize)
    }
  }

  return (
    <Container>
      <Image src={gif} ref={focusEl}/>
      <h3>dolorsit</h3>
      <h1>adipiscing elit</h1>
      <h2>$22 <span>$26</span></h2>
      <button onClick={() => resize()}>resize image</button>
    </Container>
  );
}

export default Item;