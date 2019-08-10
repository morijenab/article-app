import React, { Component } from "react";
import Card from "./Card";
import LeftArrow from './../carousel/LeftArrow';
import RightArrow from './../carousel/RightArrow';
import "./ScrollSlider.css";
import { Typography } from '@material-ui/core';
class ScrollSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 0
    };
  }

  handleLeftArrow = ()=>{
    const {articles} = this.props;
    const {left} = this.state;
    const itemsLength = articles.length;
    const max = (itemsLength * 310 - 1530)/2;
    if(left < max){
      this.setState({left: this.state.left + 310});
    }
  }
  handleRightArrow = ()=>{
    const {articles} = this.props;
    const {left} = this.state;
    const itemsLength = articles.length;
    const min = -(itemsLength * 310 - 1530)/2;
    if(left > min){
      this.setState({left: this.state.left - 310});
    }
  }
  render() {
    const { articles } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h4" style={{marginTop: '30px'}}>
          Last 8 Articles
        </Typography>
      <div className="scroll-slider">
        <LeftArrow onClick={this.handleLeftArrow } />
        <div className="card-wrapper" style={{left: this.state.left}}>
          {articles.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
        </div>
        <RightArrow onClick={this.handleRightArrow}/>
      </div>
      </React.Fragment>
    );
  }
}

export default ScrollSlider;
