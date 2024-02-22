function ChildComponent ({onclick}) {
    console.log("Child re-rendering....")
    return <button onClick={onclick}>Increment</button>
}

export default ChildComponent;