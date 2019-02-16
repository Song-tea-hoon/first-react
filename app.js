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
// props는 부모로 부터 온 object형식의 상태 readOnly(변경이 되면 자기 자신만 바뀐다.)
const Header = (props) => (
  <header>
    <h1>{props.title}</h1>
    <span className="stats">Players: {props.totalPlayers}</span>
  </header>
);

const Counter = (props) => (
  <div className="counter">
    <button className="counter-action">+</button>
    <span className="counter-score">{props.score}</span>
    <button className="counter-action">-</button>
  </div>
);

const Player = (props) => (
  <div className="player">
    <span className="player-name">{props.name}</span>
    <Counter score={props.score}/>
  </div>
);

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title="My scoreboard" totalPlayers={1 + 10}/>
      {/*play list*/}
      <Player name="song" score={50} />
      <Player name="kim" score={60} />
      <Player name="lee" score={70} />
      <Player name="park" score={80} />
    </div>
  )
}

ReactDOM.render( <App/>, document.getElementById('root'));