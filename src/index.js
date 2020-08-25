import React from 'react'
import styles from './styles.module.css'
import IconZoom from './images/zoom-in.svg'
import ReactImageZoom from 'react-image-zoom'
import CarouselModal from './component/carouselModal'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedImage: '',
      showModal: false
    }
  }
  componentDidMount() {
    let { imageUrl } = this.props
    if (imageUrl && imageUrl.length > 0) {
      this.setState({ selectedImage: imageUrl[0] })
    }
  }
  handleImage = (image) => {
    this.setState({ selectedImage: image })
  }
  closeModal = () => {
    this.setState({ showModal: false })
  }
  openModal = () => {
    this.setState({ showModal: true })
  }
  render() {
    let { imageUrl = [], imagesReview = [], titleBottom } = this.props
    let { selectedImage, showModal } = this.state
    // console.log(imageUrl)
    return (
      <div className={styles.productImage}>
        {showModal && (
          <CarouselModal imageArr={imageUrl} closeModal={this.closeModal} />
        )}
        <div className={styles.groupImages}>
          <div className={styles.images}>
            {Array.isArray(imageUrl) &&
              imageUrl.map((image, index) => {
                if (index <= 3)
                  return (
                    <img
                      className={
                        image === selectedImage
                          ? styles.selectedThumnail
                          : styles.thumnail
                      }
                      src={image}
                      onClick={() => this.handleImage(image)}
                    />
                  )
              })}
            {imageUrl.length > 3 && (
              <div className={styles.seeMoreImage}>
                <div>
                  <img src={imageUrl[4]}></img>
                </div>
                <div
                  className={styles.backgroundSeeMore}
                  onClick={() => this.openModal()}
                >
                  See more {imageUrl.length - 3} image
                </div>
              </div>
            )}
          </div>
          <div className={styles.imageZoom}>
            {selectedImage && (
              <ReactImageZoom
                width={430}
                height={430}
                zoomWidth={500}
                img={selectedImage}
              />
            )}{' '}
            <p className='legend'>
              <img className={styles.zoomIcon} src={IconZoom}></img>
              Rê chuột lên hình để phóng to
            </p>
          </div>
          <div></div>
        </div>
        {titleBottom && <h4>{titleBottom}</h4>}
        <div className={styles.imagesReview}>
          {Array.isArray(imagesReview) &&
            imagesReview.map((image, index) => {
              if (index <= 5)
                return (
                  <img
                    className={
                      image === selectedImage
                        ? styles.selectedThumnail
                        : styles.thumnail
                    }
                    src={image}
                    onClick={() => this.handleImage(image)}
                  />
                )
            })}
          {imagesReview.length > 5 && (
            <div className={styles.seeMoreImage}>
              <div>
                <img src={imagesReview[4]}></img>
              </div>
              <div
                className={styles.backgroundSeeMore}
                onClick={() => this.openModal()}
              >
                See more {imageUrl.length - 5} image
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
