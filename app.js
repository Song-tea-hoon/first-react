const myTitle = 'This is a title';
const myTitleId = 'main-title';
const title = 'My First React Element';
const desc = 'This is a Description';

// webstrom 범위 선택  : control - w
// const head = (
//   <header>
//     <h1 id={myTitleId} title={myTitle}>111 {title}</h1>
//     <p>{desc}</p>
//   </header>
// )

// function component
// 함수 컴포넌트를 **호출(생성이 아니다.)**하면 JSX형식에 맞춰진 ReactElement객체를 리턴
const Header = (props) => (
  <header>
    <h1>Scoreboard</h1>
    <span className="stats">Players: 1</span>
  </header>
);

const Counter = (props) => (
  <div className="counter">
    <button className="counter-action">+</button>
    <span className="counter-score">35</span>
    <button className="counter-action">-</button>
  </div>
);

const Player = (props) => (
  <div className="player">
    <span className="player-name">song</span>
    <Counter/>
  </div>
);

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header/>
      {/*play list*/}
      <Player/>
    </div>
  )
}

ReactDOM.render( <App/>, document.getElementById('root'));