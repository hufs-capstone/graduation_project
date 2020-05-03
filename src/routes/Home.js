import React,{Component} from 'react';
import Example from '../components/Homeslice';
import {
    Carousal,
    CarouselItem,
    CarousalControl,
    CarousalIndicators,
    CarousalCaption
} from 'reactstrap';

class Home extends Component{

    render(){
        return (

            <div>
                <Example/>
            </div>
        );
    }
}
export default Home;