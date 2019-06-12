import React from 'react';

const Previewer = (props) => (
	<div className="preview-container">
		<h4 className="preview-title">Previewer</h4>
		<div id="preview" dangerouslySetInnerHTML={ { __html: props.markdownedString } }></div>
	</div>
)

export default Previewer;