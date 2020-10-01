import Drift from 'drift-zoom';
import React, { Component } from 'react';


new Drift(document.querySelector("img"), {
  paneContainer: document.querySelector("p")
});
class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

    ;
  }
  handleNameTextChange(e) {
    this.setState({nameText: e.target.value})
    console.log(this.state)
  } 
  render() {
    return (
      <>
      <img src="http://assets.imgix.net/dog.png?w=400" data-zoom="http://assets.imgix.net/dog.png?w=1200"></img>
      <p>This is a simple description of the dog picture.</p>
      </>
    )
  }
}
export default Display;
var options = {
	// Prefix for generated element class names (e.g. `my-ns` will
	// result in classes such as `my-ns-pane`. Default `drift-`
	// prefixed classes will always be added as well.
	namespace: null,
	// Whether the ZoomPane should show whitespace when near the edges.
	showWhitespaceAtEdges: false,
	// Whether the inline ZoomPane should stay inside
	// the bounds of its image.
	containInline: false,
	// How much to offset the ZoomPane from the
	// interaction point when inline.
	inlineOffsetX: 0,
	inlineOffsetY: 0,
	// A DOM element to append the inline ZoomPane to.
	inlineContainer: document.body,
	// Which trigger attribute to pull the ZoomPane image source from.
	sourceAttribute: 'data-zoom',
	// How much to magnify the trigger by in the ZoomPane.
	// (e.g., `zoomFactor: 3` will result in a 900 px wide ZoomPane image
	// if the trigger is displayed at 300 px wide)
	zoomFactor: 3,
	// A DOM element to append the non-inline ZoomPane to.
	// Required if `inlinePane !== true`.
	paneContainer: document.body,
	// When to switch to an inline ZoomPane. This can be a boolean or
	// an integer. If `true`, the ZoomPane will always be inline,
	// if `false`, it will switch to inline when `windowWidth <= inlinePane`
	inlinePane: 375,
	// If `true`, touch events will trigger the zoom, like mouse events.
	handleTouch: true,
	// If present (and a function), this will be called
	// whenever the ZoomPane is shown.
	onShow: null,
	// If present (and a function), this will be called
	// whenever the ZoomPane is hidden.
	onHide: null,
	// Add base styles to the page. See the "Theming"
	// section of README.md for more information.
	injectBaseStyles: true,
	// An optional number that determines how long to wait before
	// showing the ZoomPane because of a `mouseenter` event.
	hoverDelay: 0,
	// An optional number that determines how long to wait before
	// showing the ZoomPane because of a `touchstart` event.
	// Setting this to a reasonable amount will allow users to execute
	// scroll-gestures events on touch-enabled devices with the image as
	// a starting point
	touchDelay: 0,
	// If true, a bounding box will show the area currently being previewed
	// during mouse hover
	hoverBoundingBox: false,
	// If true, a bounding box will show the area currently being previewed
	// during touch events
	touchBoundingBox: false,
	// A DOM element to append the bounding box to.
	boundingBoxContainer: document.body,
};

new Drift(document.querySelector('img'), options)