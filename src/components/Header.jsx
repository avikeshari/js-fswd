import React from 'react'

function Header(props){
    let sname='Kirti';
    let sage='21';
    //props.receiveChildData(sname,sage);
    React.useEffect(() => {
        if (typeof props.receiveChildData === 'function') {
            props.receiveChildData(sname, sage);
        }
    }, [props.receiveChildData]);
    return <div>
        <h1>GUVI</h1>
        <nav>
            <ul>
                <li>Home</li>
                <li>Courses</li>
                <li>Practice</li>
                <li>Contact</li>
            </ul>
        </nav>
        <h1>Hello {props.name}! You're {props.age} years old!</h1>
    </div>
}

export default Header;