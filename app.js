const title = React.createElement(
  'h1',
  {id:'main-title', title: 'This is a title'},
  'My First React Element'
);

const strong = React.createElement(
  'strong',
  null,
  'Description'
)

const desc = React.createElement(
  'p',
  null,
  'This is a ', strong
)

const head = React.createElement(
  'header',
  null,
  title, desc
)

console.log(title);

ReactDOM.render( head, document.getElementById('root'));