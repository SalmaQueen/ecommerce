import React, { Component } from 'react'
import LatestProducts from '../Components/LatestProducts'
import Sliders from '../Components/Sliders'
import BestFeatures from '../Components/BestFeatures'
import Action from '../Components/Action'
import NewsLetter from '../Components/NewsLetter'

export default class Home extends Component {
    render() {
        return (
            <>
              <Sliders/>
            <LatestProducts/>
          
            <Action/>
            <BestFeatures/>
            <NewsLetter/>
              
            </>
        )
    }
}
