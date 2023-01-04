const root = ReactDOM.createRoot(document.getElementById("root"))

function Heading() {
    return (
        <nav className="nav">
            <img src="./react-logo.png" className="logo" />
            <ul className="nav-items">
                <li>About</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

function Content () {
    return (
        <div>
            <h1>HELLOOOOOO</h1>
            <p>
                gdioaugi udgwi fgwegi fgwg ifgwefg iwegfiew gfiwf78wg 8fw76efuydvs fs7s 7g76 8fgwe87 few gfgw76 
            </p>
        </div>
    )
}

function Page () {
    return ( 
        <div>
            <Heading />
            <Content />
        </div>
    )
}

root.render(<Page />)