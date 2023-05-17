
export default function Link(props) {
    var output;
    if (props.image) {
        output = "Hello";
    } else {
        output = props.name;
    }
    return (
    <a className="App-link"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
    >{output}</a> 
    );
  }