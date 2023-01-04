const root = ReactDOM.createRoot(document.getElementById("root"))
const content = (
<div>
    <img src="react-logo.png" width="40px">
    <h1>Fun Facts about React</h1>
    <ul>
        <li>Was first released in 2013</li>
        <li>Was Originally created by Jordan Walke</li>
        <li>Has 100k+ stars on github</li>
        <li>Maintained by Meta</li>
        <li>Powers 1000s of apps, including mobile apps</li>
    </ul>
</div>)   

root.render(content)