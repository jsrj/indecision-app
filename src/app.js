class IndecisionApp extends React.Component {

  render() {

    const title = 'Indecision';
    const subTitle = 'Make Up Your Mind With The Help of Randomness';
    const options = ['One Thing', 'Two Thing', 'Red Thing', 'Blue Thing'];

    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Options optionList={options} />
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
        <span>
        {
          (this.props.optionList && this.props.optionList.length > 0) 
          && 'Here Are Your' || 'You Have No'
        } Options:</span>
        <ul>
        {
          this.props.optionList.map(option => <Option key={Math.random()*Math.random()} option={option} />)
        }
        </ul>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <li>{this.props.option}</li>
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