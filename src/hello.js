import React from "react";

function Hello({color, name, isSpecial}) {
    return (
        <div style={{color}}>
            { isSpecial && <b>*</b>}
            hello.js를 App.js에 넣어보아유 {name}</div>
    );
}

Hello.defaultProops = {
    name: '이름없음'
}


export default Hello;