const app = {
  title: 'Indecision',
  'subTitle': 'Make Up Your Mind With The Help of Math',
  'options': [' ']
}

class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Options />
        <AddOption />
        <Action />
      </div>
    )
  }
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

class Options extends React.Component {
  render() {
    return (
      <div>
        <span>{(app.options.length > 0) && 'Here Are Your' || 'You Have No'} Options:</span>
        <ul>
          <li>Option Component Goes Here</li>
          <li>Option Component Goes Here</li>
          <li>Option Component Goes Here</li>
        </ul>
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="option" placeholder="I want to..." />
      </form>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));