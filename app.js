const title = (
  <h1 id="main-title" title="This is a title">
    My First React Element
  </h1>
);
//   React.createElement(
//   'h1',
//   {id:'main-title', title: 'This is a title'},
//   'My First React Element'
// );

const strong = (
  <strong>
    Description
  </strong>
)
//   React.createElement(
//   'strong',
//   null,
//   'Description'
// )

const desc = (
  <p>
    This is a {strong}
  </p>
)
//   React.createElement(
//   'p',
//   null,
//   'This is a ', strong
// )

const head = (
  <header>
    {title}
    {desc}
  </header>
)
//   React.createElement(
//   'header',
//   null,
//   title, desc
// )

console.log(title);

ReactDOM.render( head, document.getElementById('root'));