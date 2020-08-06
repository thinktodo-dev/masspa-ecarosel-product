import React__default, { Component } from 'react';
import ReactImageZoom from 'react-image-zoom';

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var styles = {"view":"_2L4_H","container":"_1Lxpd","seeMoreImage":"_2YG6l","zoomIcon":"_EeA8_","backgroundSeeMore":"_O4QRc","image":"_2hdkJ","productImage":"_1yfgn","productContent":"_270Dd","header":"_1aDvk","price":"_1tau5","buttonGroup":"_2wPQk","quanlityInput":"_3L-mL","groupImages":"_2WWDl","images":"_MSO0O","imagesReview":"_26uWC","thumnail":"_1GkFG","selectedThumnail":"_3xXdB","imageZoom":"_3XCbk","title":"_2KezC","featureItem":"_2Dq3I","quantity":"_28bBo","inputQuantity":"_fiAc8","star":"_2Hl1u","buttonOrder":"_tRvTu","brand":"_16KKN","sku":"_bLJQm"};

var IconZoom = require("./zoom-in~cplYhRYV.svg");

var CloseIcon = require("./close~qNWKeLZD.svg");

var NextIcon = require("./next~ncGkEtFu.svg");

var PrevIcon = require("./previous~NFbvoLqw.svg");

var styles$1 = {"modal":"_1DePc","imageModal":"_3Zk6u","thumb":"_3uRdb","imageThumb":"_1M576","activeImageThumb":"_2-bGu","iconPrevious":"_MfS12","iconDisablePrevious":"_1elrg","carousel":"_21A6k","iconClose":"_b7sY-"};

var carouselModal = /*#__PURE__*/function (_Component) {
  _inheritsLoose(carouselModal, _Component);

  function carouselModal(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.componentDidMount = function () {
      return Promise.resolve();
    };

    _this.previousImg = function () {
      if (_this.state.active > 0) {
        var newActive = _this.state.active - 1;

        _this.setState({
          active: newActive
        });
      }
    };

    _this.nextImg = function () {
      if (_this.state.active < _this.props.imageArr.length - 1) {
        var newActive = _this.state.active + 1;

        _this.setState({
          active: newActive
        });
      }
    };

    _this.closeModal = function () {
      _this.props.closeModal();
    };

    _this.showImage = function (index) {
      _this.setState({
        active: index
      });
    };

    _this.state = {
      active: 0
    };
    return _this;
  }

  var _proto = carouselModal.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var imageArr = this.props.imageArr;
    var active = this.state.active;
    return /*#__PURE__*/React__default.createElement("div", {
      className: styles$1.modal
    }, /*#__PURE__*/React__default.createElement("div", {
      className: styles$1.carousel
    }, /*#__PURE__*/React__default.createElement("img", {
      className: styles$1.iconClose,
      onClick: function onClick() {
        return _this2.closeModal();
      },
      src: CloseIcon
    }), /*#__PURE__*/React__default.createElement("img", {
      className: active > 0 ? styles$1.iconPrevious : styles$1.iconDisablePrevious,
      onClick: function onClick() {
        return _this2.previousImg();
      },
      src: PrevIcon
    }), /*#__PURE__*/React__default.createElement("img", {
      className: styles$1.imageModal,
      src: imageArr[active]
    }), /*#__PURE__*/React__default.createElement("img", {
      className: active < imageArr.length - 1 ? styles$1.iconPrevious : styles$1.iconDisablePrevious,
      src: NextIcon,
      onClick: function onClick() {
        return _this2.nextImg();
      }
    })), /*#__PURE__*/React__default.createElement("div", {
      className: styles$1.thumb
    }, imageArr && imageArr.map(function (image, index) {
      return /*#__PURE__*/React__default.createElement("img", {
        className: active === index ? styles$1.activeImageThumb : styles$1.imageThumb,
        onClick: function onClick() {
          return _this2.showImage(index);
        },
        src: image
      });
    })), /*#__PURE__*/React__default.createElement("div", null));
  };

  return carouselModal;
}(Component);

var App = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(App, _React$Component);

  function App(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleImage = function (image) {
      _this.setState({
        selectedImage: image
      });
    };

    _this.closeModal = function () {
      _this.setState({
        showModal: false
      });
    };

    _this.openModal = function () {
      _this.setState({
        showModal: true
      });
    };

    _this.state = {
      selectedImage: '',
      showModal: false
    };
    return _this;
  }

  var _proto = App.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var imageUrl = this.props.imageUrl;

    if (imageUrl && imageUrl.length > 0) {
      this.setState({
        selectedImage: imageUrl[0]
      });
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        _this$props$imageUrl = _this$props.imageUrl,
        imageUrl = _this$props$imageUrl === void 0 ? [] : _this$props$imageUrl,
        _this$props$imagesRev = _this$props.imagesReview,
        imagesReview = _this$props$imagesRev === void 0 ? [] : _this$props$imagesRev,
        titleBottom = _this$props.titleBottom;
    var _this$state = this.state,
        selectedImage = _this$state.selectedImage,
        showModal = _this$state.showModal;
    return /*#__PURE__*/React__default.createElement("div", {
      className: styles.productImage
    }, showModal && /*#__PURE__*/React__default.createElement(carouselModal, {
      imageArr: imageUrl,
      closeModal: this.closeModal
    }), /*#__PURE__*/React__default.createElement("div", {
      className: styles.groupImages
    }, /*#__PURE__*/React__default.createElement("div", {
      className: styles.images
    }, imageUrl && imageUrl.map(function (image, index) {
      if (index <= 3) return /*#__PURE__*/React__default.createElement("img", {
        className: image === selectedImage ? styles.selectedThumnail : styles.thumnail,
        src: image,
        onClick: function onClick() {
          return _this2.handleImage(image);
        }
      });
    }), imageUrl.length > 3 && /*#__PURE__*/React__default.createElement("div", {
      className: styles.seeMoreImage
    }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("img", {
      src: imageUrl[4]
    })), /*#__PURE__*/React__default.createElement("div", {
      className: styles.backgroundSeeMore,
      onClick: function onClick() {
        return _this2.openModal();
      }
    }, "See more ", imageUrl.length - 3, " image"))), /*#__PURE__*/React__default.createElement("div", {
      className: styles.imageZoom
    }, selectedImage && /*#__PURE__*/React__default.createElement(ReactImageZoom, {
      width: 430,
      height: 430,
      zoomWidth: 500,
      img: selectedImage
    }), ' ', /*#__PURE__*/React__default.createElement("p", {
      className: "legend"
    }, /*#__PURE__*/React__default.createElement("img", {
      className: styles.zoomIcon,
      src: IconZoom
    }), "Re chuot len hiinh de phong to")), /*#__PURE__*/React__default.createElement("div", null)), titleBottom && /*#__PURE__*/React__default.createElement("h4", null, titleBottom), /*#__PURE__*/React__default.createElement("div", {
      className: styles.imagesReview
    }, imagesReview && imagesReview.map(function (image, index) {
      if (index <= 5) return /*#__PURE__*/React__default.createElement("img", {
        className: image === selectedImage ? styles.selectedThumnail : styles.thumnail,
        src: image,
        onClick: function onClick() {
          return _this2.handleImage(image);
        }
      });
    }), imagesReview.length > 5 && /*#__PURE__*/React__default.createElement("div", {
      className: styles.seeMoreImage
    }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("img", {
      src: imagesReview[4]
    })), /*#__PURE__*/React__default.createElement("div", {
      className: styles.backgroundSeeMore,
      onClick: function onClick() {
        return _this2.openModal();
      }
    }, "See more ", imageUrl.length - 5, " image"))));
  };

  return App;
}(React__default.Component);

export default App;
//# sourceMappingURL=index.modern.js.map
