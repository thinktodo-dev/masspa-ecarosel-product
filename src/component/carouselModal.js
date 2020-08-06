import React, { Component } from 'react'
import CloseIcon from '../images/close.svg'
import NextIcon from '../images/next.svg'
import PrevIcon from '../images/previous.svg'
import styles from './carouselModal.module.css'

export default class carouselModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0
    }
  }
  componentDidMount = async () => {
    // let {imageUrl} = this.props
    //  if(imageUrl && imageUrl.length > 0) {
    //    this.setState({activeImg: imageUrl[0]})
    //  }
  }
  previousImg = () => {
    if (this.state.active > 0) {
      let newActive = this.state.active - 1
      this.setState({ active: newActive })
    }
  }
  nextImg = () => {
    if (this.state.active < this.props.imageArr.length - 1) {
      let newActive = this.state.active + 1
      this.setState({ active: newActive })
    }
  }
  closeModal = () => {
    this.props.closeModal()
  }
  showImage = (index) => {
    this.setState({ active: index })
  }
  render() {
    let { imageArr } = this.props
    let { active } = this.state
    return (
      <div className={styles.modal}>
        <div className={styles.carousel}>
          <img
            className={styles.iconClose}
            onClick={() => this.closeModal()}
            src={CloseIcon}
          ></img>
          <img
            className={
              active > 0 ? styles.iconPrevious : styles.iconDisablePrevious
            }
            onClick={() => this.previousImg()}
            src={PrevIcon}
          ></img>
          <img className={styles.imageModal} src={imageArr[active]}></img>
          <img
            className={
              active < imageArr.length - 1
                ? styles.iconPrevious
                : styles.iconDisablePrevious
            }
            src={NextIcon}
            onClick={() => this.nextImg()}
          ></img>
        </div>
        <div className={styles.thumb}>
          {imageArr &&
            imageArr.map((image, index) => {
              return (
                <img
                  className={
                    active === index
                      ? styles.activeImageThumb
                      : styles.imageThumb
                  }
                  onClick={() => this.showImage(index)}
                  src={image}
                ></img>
              )
            })}
        </div>
        <div></div>
      </div>
    )
  }
}
