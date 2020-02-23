import React, { Component } from 'react';

import cakeData from './../../data/cakes.json';

export default class extends Component{

    constructor(props){
        super(props);
        this.state = {
            data: null,
            err: false,
            loading: true,
            index: 0,
            size: null
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
            loading: false,
            size: data.length
        });
    }

    render(){

        return(
            <React.Fragment>

            </React.Fragment>
        )
    }


}