const app = {
  title: 'Indecision',
  'subTitle': 'Make Up Your Mind With The Help of Math'
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{app.title}</h1>
        <h4>{app.subTitle}</h4>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return <button>Choose For Me!</button>;
  }
}

const jsx = (
  <div>
    <Header />
    <Action />
  </div>
);
ReactDOM.render(jsx, document.getElementById('app'));