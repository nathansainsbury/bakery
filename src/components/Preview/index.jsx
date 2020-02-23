import React, { Component } from 'react';

import CardThin from './../CardThin';
import cakeData from './../../data/cakes.json';

export default class extends Component{

    constructor(props){
        super(props);
        this.state = {
            data: null,
            err: false,
            loading: true
        };

        this.getData = this.getData.bind(this);
    }

    componentWillMount(){
        // when the component mounts, get the data and hopefully render it
        this.getData();
    }

    // eventually this will be dynamic
    getData(){
        const data = cakeData;
        this.setState({
            data,
            err: false,
            loading: false
        });
    }

    render(){

        return(
            <div className='row my-4'>
                {this.state.data ? this.state.data.map(({ id, name, description, price, img }) => <CardThin id={id} name={name} description={description} price={price} img={img} />) : 'Loading...'}
            </div>
        )
    }


}