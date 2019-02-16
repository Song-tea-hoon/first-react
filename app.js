const myTitle = 'This is a title';
const myTitleId = 'main-title';
const title = 'My First React Element';
const desc = 'This is a Description';

// 선택 범위 : control - w
const head = (
  <header>
    <h1 id={myTitleId} title={myTitle}>111 {title}</h1>
    <p>{desc}</p>
  </header>
)

console.log(head);

ReactDOM.render( head, document.getElementById('root'));