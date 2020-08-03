function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
require('react-responsive-carousel/lib/styles/carousel.min.css');
var ReactImageZoom = _interopDefault(require('react-image-zoom'));

var styles = {"test":"_3ybTi"};

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var styles$1 = {"modal":"_3PmEZ","imageModal":"_3CAmn","thumb":"_eLAeI","imageThumb":"_36W95","activeImageThumb":"_1MmHQ","iconPrevious":"_2tAuH","iconDisablePrevious":"_3TWK0","carousel":"_3jHa0","iconClose":"_2tZIK"};

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
    console.log(imageArr);
    console.log(active);
    return /*#__PURE__*/React__default.createElement("div", {
      className: styles$1.modal
    }, /*#__PURE__*/React__default.createElement("div", {
      className: styles$1.carousel
    }, /*#__PURE__*/React__default.createElement("img", {
      className: styles$1.iconClose,
      onClick: function onClick() {
        return _this2.closeModal();
      },
      src: "/close.svg"
    }), /*#__PURE__*/React__default.createElement("img", {
      className: active > 0 ? styles$1.iconPrevious : styles$1.iconDisablePrevious,
      onClick: function onClick() {
        return _this2.previousImg();
      },
      src: "/previous.svg"
    }), /*#__PURE__*/React__default.createElement("img", {
      className: styles$1.imageModal,
      src: imageArr[active]
    }), /*#__PURE__*/React__default.createElement("img", {
      className: active < imageArr.length - 1 ? styles$1.iconPrevious : styles$1.iconDisablePrevious,
      src: "/next.svg",
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
}(React.Component);

var App = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(App, _React$Component);

  function App(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.componentDidMount = function () {
      try {
        var imageUrl = _this.props.imageUrl;

        if (imageUrl && imageUrl.length > 0) {
          _this.setState({
            selectedImage: imageUrl[0]
          });
        }

        return Promise.resolve();
      } catch (e) {
        return Promise.reject(e);
      }
    };

    _this.handleImage = function (image) {
      console.log(image);

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
      selectedImage: "",
      showModal: false
    };
    return _this;
  }

  var _proto = App.prototype;

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
    }), "          ", /*#__PURE__*/React__default.createElement("p", {
      className: "legend"
    }, /*#__PURE__*/React__default.createElement("img", {
      className: styles.zoomIcon,
      src: "./zoom-in.svg"
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

var ExampleComponent = function ExampleComponent(_ref) {
  var props = _ref.props;
  return /*#__PURE__*/React__default.createElement(App, props);
};

exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map
