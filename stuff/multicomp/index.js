const root = ReactDOM.createRoot(document.getElementById("root"))

function Heading () {
    return ( <header>
            <h1>Barrado Bistro</h1>
            <small>Click to navigate through the site</small>
            <ul>
                <li>Coffee</li>
                <li>Juices</li>
            </ul>
            </header> )
} 

function Footing () {
    return ( 
        <footer>
            <h2>THIS IS THE FOOTER BTW</h2>
            <small>Copyright to Barrado Bistro Development LLC</small>
        </footer>
    )
}

function Content () {
    return ( 
        <div>
            <h1>LOREM IPSUM</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quidem ducimus recusandae ipsum provident a? 
            Rerum quos, nemo facilis eum error fuga perferendis dolorem harum perspiciatis, 
            praesentium ex repellendus aut suscipit?
        </p>
        </div>
    )
}

function Page () {
    return ( 
        <div>
            <Heading />
            <Content />
            <Footing />
        </div>
    )
}

root.render(<Page />)