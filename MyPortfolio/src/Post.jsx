export function Post(props){
    return(
        <div>
            <strong>{props.title}</strong>
            <p>{props.content}</p>
            <p>{props.author}</p>
        </div>
    )
}