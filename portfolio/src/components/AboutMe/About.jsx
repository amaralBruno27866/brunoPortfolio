import styels from './About.module.css';

export function About(){
    return(
        <div className={styels.about}>
            <div>
                <h1>About me</h1>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nemo vero explicabo. Minus quae aliquid commodi harum perferendis ipsam repellat. Dolor enim in unde perspiciatis. Iste consequatur nostrum necessitatibus tempore.
                </p>
            </div>
        </div>
    )
}