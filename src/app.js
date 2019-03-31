class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header title='Indecision' subTitle='Make Up Your Mind With The Help of Randomness' />
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
        <h1>{this.props.title}</h1>
        <h4>{this.props.subTitle}</h4>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <span>{(app.options && app.options.length > 0) && 'Here Are Your' || 'You Have No'} Options:</span>
        <ul>
          <Option />
          <Option />
          <Option />
        </ul>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <li>Option Component Goes Here</li>
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

class Action extends React.Component {
  render() {
    return <button>Make Up My Mind!</button>;
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));