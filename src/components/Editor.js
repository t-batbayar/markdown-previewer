import React from 'react';

const Editor = (props) => {
	return (
		<div className="editor-container">
			<h4 className="editor-title">Editor</h4>
			<textarea 
				id="editor"
				onChange={ (e) => { props.handleEditorChange(e) } } 
				defaultValue={ props.defaultValue }
			></textarea>
		</div>
	)
}

export default Editor;