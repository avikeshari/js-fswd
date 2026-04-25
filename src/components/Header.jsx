function Header(props){
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
        <div>
            <h1>Hello {props.name}! You're {props.age} years old!</h1>
        </div>
    </div>
}

export default Header;