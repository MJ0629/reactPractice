import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Hello from './hello';
// import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';


  // const test = 1234;
function App() {
  // const name = 'react';
  // const style = {
  //   backgroundColor : 'black',
  //   color : '#eee',
  //   fontSize : 24,
  //   padding : '1rem'
  // }
  return (
    <>
      {/* <Wrapper>
        <div>
          안녕하세요
          <Hello color="pink" isSpecial/>
          <Hello name="react" color="red"/>
          <br />
          
          <Hello />
        </div>
        <ul>
          <li>가</li>
          <li>나</li>
          <li>다</li>
          <li>라</li>
          <li style={style}>{name}</li>
          <li>{test}</li>
        </ul>

        <div className="pink-box"></div>
        
      </Wrapper> */}
      {/* 주석모양 */}
      <Counter/>
      <InputSample />
    </>
  );
}


export default App;
