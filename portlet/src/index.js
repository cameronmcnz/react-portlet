// import './index.css';
import App from './App';
import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';
import axios from 'axios';

/**
 * This is the main entry point of the portlet. It receives a hash of values
 * describing the context of execution. The values are:
 *
 *   - portletElementId:
 *   		The id of the DOM node which acts as a container for the portlet.
 *   		Usually you will want to attach any generated HTML code to this
 * 			node.
 *
 *   - portletNamespace:
 *   		Portlet namespace, which is the unique identifier for this portlet
 *   		instance.
 *
 *   - contextPath:
 *   		The absolute path portion to this module's resources. It starts with
 *   		'/' and doesn't contain the protocol, host, port or authentication
 *   		values. Just the path.
 *
 * @param  {Object} params a hash with values of interest to the portlet
 * @return {void}
 */
export default function main({
	portletNamespace,
	contextPath,
	portletElementId
}) {
	ReactDOM.render(<App />, document.getElementById(portletElementId));
	console.log("Hello World!");
	axios(
		{
			method: 'get',
			url: 'https://api.thecatapi.com/v1/images/search'
		},
		{
			'Content-Type': 'text/html'
		}
	).then((response) => {
		console.log(response.data);
	});
}
