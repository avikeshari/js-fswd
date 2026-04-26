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
    /*let n="";
    let a=0;
    const receiveChildData = (sname,sage) => {
        n=sname;
        a=sage;
    }*/
    const [n, setN] = React.useState("");
    const [a, setA] = React.useState(0);

    const receiveChildData = (sname, sage) => {
        // 2. Update the state using the setter functions
        setN(sname);
        setA(sage);
    };
    let name = 'Avi';
    let age = 30;
    return <div>
        <Header receiveChildData={receiveChildData} name={name} age={age} />
        <h2>You've a sister named {n}, who is {a} years old!</h2>
    </div>
}

export default Appp;