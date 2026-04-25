import React from 'react'
import Header from'./components/Header.jsx'

//class Appp extends React.Component{
//    render(){
//        return <div>
//            <h1>Hello World!</h1>
//        </div>
//    }
//}

function Appp(){
    let name = 'Avi';
    let age = 30;
    return <Header name={name} age={age}/>
}

export default Appp;