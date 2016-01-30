// tutorial1.js, tutorial3.js
var CommentBox = React.createClass({
	render: function() {
		return (
			<div classname="CommentBox">
				<h1>Comments</h1>
				<CommentList />
				<CommentForm />
			</div>
		);
	}
});

// tutorial1-raw.js
// var CommentBox = React.createClass({displayName: 'CommentBox',
// 	render: function() {
// 		return (
// 			React.createElement('div', {className: "commentBox"}, "Hello, Im micha")
// 		);
// 	}
// });

// tutorial2.js
var CommentList = React.createClass({
	render: function() {
	return (
		<div className="commentList">
		Hello, world! I am a CommentList.
			<Comment author="Micha Wei">Micha is good</Comment>
			<Comment author="Kenny Hsiao">Micha is the most beautiful~</Comment>
		</div>
	);
	}
});

var CommentForm = React.createClass({
	render: function() {
	return (
		<div className="commentForm">
		Hello, world! I am a CommentForm.
		</div>
	);
	}
});

// tutorial4.js
var Comment = React.createClass({
	render: function() {
		return (
			<div classname="comment">
				<h2 classname="commentAuthor">
					{this.props.author}
				</h2>
				{this.props.children}
			</div>
		);
	}
});


ReactDOM.render(
	<CommentBox />,
	document.getElementById('content')
);