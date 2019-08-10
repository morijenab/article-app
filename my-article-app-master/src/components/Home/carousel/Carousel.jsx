import React, { Component } from "react";
import Slide from "./Slide";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import "./carousel.css";
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          img:
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
          caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
          img:
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
          caption: "caption2"
        },
        {
          img: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
          caption: "caption3"
        },
        {
          img:
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
          caption: "caption4"
        },
        {
          img:
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
          caption: "caption5"
        },
        {
          img:
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
          caption: "caption6"
        },
        {
          img:
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
          caption: "caption7"
        },
        {
          img:
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg",
          caption: "caption8"
        }
      ],
      activeIndex: 0
    };
  }
  // componentDidMount() {

    // const { items } = this.props;
    // console.log(items);
    // this.setState({ items });
  // }
  timer;
  // componentWillUpdate() {
  //   clearTimeout(this.timer);
  // }
  nextSlide = () => {
    clearTimeout(this.timer);
    const { activeIndex,items } = this.state;
    if (activeIndex < items.length - 1) {
      this.setState({
        activeIndex : activeIndex + 1
      });
    }else{
      this.setState({activeIndex:0})
    }
  };
  prevSlide = () => {
    clearTimeout(this.timer);
    const { activeIndex,items } = this.state;
    if (activeIndex > 0) {
      this.setState({
        activeIndex : activeIndex - 1
      });
    }else{
      this.setState({activeIndex : items.length-1})
    }
  };
  slide = async () => {
    const { activeIndex,items } = this.state;
    this.timer = setTimeout(()=>{
      if (activeIndex < items.length - 1) {
        this.setState({
          activeIndex : activeIndex + 1
        });
      }else{
        this.setState({activeIndex:0})
      }
    },2500)
  };
  render() {
    this.slide();
    clearTimeout(this.timer);
    const { activeIndex, items } = this.state;
    const slides = items.map((item, index) => {
      return (
        <Slide key={index} slide={item} activeClass={index === activeIndex} />
      );
    });
    return (
      <div className="carousel">
        <LeftArrow onClick={this.nextSlide}/>
        {slides}
        <RightArrow onClick={this.prevSlide}/>
      </div>
    );
  }
}
export default Carousel;
