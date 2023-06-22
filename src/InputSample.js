import React, { useState } from "react";

function InputSample() {
    // const [text, setText] = useState('');
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const {name, nickname} = inputs;    //비구조화? 할당으로 값 추출..


    const onChange = (e) => {
        // setText(e.target.value);

        const {value, name} =  e.target;
        // 우선 e.target에서 name과 value를 추출

        setInputs({
            ...inputs,  //기존의 input 객체 복사 ?
            [name]: value,
        });
        console.log('내용이 입력중입니다.');
    };

    const onReset = () => {
        // setText('');
        setInputs({
            name: '',
            nickname: '',
        });
        console.log('reset 버튼이 눌렸습니다.');
    };


    return (
        <div>
            {/* <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button> */}

            <input placeholder="이름" onChange={onChange} value={name}/>
            <input placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name} ({nickname})
            </div>
        </div>
    );
}


export default InputSample