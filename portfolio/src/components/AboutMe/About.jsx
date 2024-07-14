import {Chart} from './Chart/Chart';
import styels from './About.module.css';

export function About(){
    return(
        <div className={styels.about}>
            <div>
                <h1>About me</h1>
                <div>
                    <img src="../../../img/IMG_0168.JPEG" alt="" />
                    <img src="../../../img/IMG_0380.JPEG" alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nemo vero explicabo. Minus quae aliquid commodi harum perferendis ipsam repellat. Dolor enim in unde perspiciatis. Iste consequatur nostrum necessitatibus tempore.
                    </p>
                </div>
            </div>            
            <div>
                <Chart/>
            </div>
        </div>
    )
}