//Higher - order components (HOC) as functional components
const WithUpperCase =(WrappedComponent)=> {
    return function({text,...restProps}) {
        const upperCaseText = text. toUpperCase();
        return <WrappedComponent text = {upperCaseText} {...restProps}/>
    }
}

//Component

const myComponent=({text}) => <div>{text}</div>;

//Usage of HOC 

const MyComponentWithUpperCase = WithUpperCase(myComponent);

export default MyComponentWithUpperCase;