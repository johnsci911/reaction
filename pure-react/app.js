const Person = (props) => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, props.name),
		React.createElement("p", {}, props.occupation),
	]);
}

const App = () => {
	return React.createElement("div", {}, [
		React.createElement("h1", {className: 'Title'}, 'React is rendered'),
		React.createElement(Person, {name: "John", occupation: "Dev"}, null),
		React.createElement(Person, {name: "Joe", occupation: "Dev"}, null),
		React.createElement(Person, {name: "Jane", occupation: "Teacher"}, null),
	])
}

ReactDOM.render(
	React.createElement(App), 
	document.getElementById('root')
) 

