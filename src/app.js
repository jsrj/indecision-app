class IndecisionApp extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      title: 'Indecision',
      subTitle: 'Make Up Your Mind With The Help of Randomness',
      optionList: ['One Thing', 'Two Thing', 'Red Thing', 'Blue Thing']
    }
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} subTitle={this.state.subTitle} />
        <Options optionList={this.state.optionList} />
        <AddOption />
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
  constructor(p) {
    super(p);
    this.state = {
      optionList: this.props.optionList
    }
    this.removeOptions = this.removeOptions.bind(this);
  }

  removeOptions() {
    console.log(this.state.optionList);
    this.setState(() => {
      return {
        optionList: []
      }
    });
  }

  render() {
    return (
      <div>
        <span>
        {
          (this.state.optionList && this.state.optionList.length > 0) 
          && 'Here Are Your' || 'You Have No'
        } Options:
        </span>
        <ul>
        {
          this.state.optionList.map (
            option => <Option key={option+Math.random()} option={option} />
          )
        }
        </ul>

        <br/>

        <button onClick={this.removeOptions}>Reset</button>
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
  addOption(event) {
    event.preventDefault();
    console.log(this.state);
    let option = event.target.elements.option.value.trim();
    if (option) {
      console.log(`"${option}"`);
    }
    event.target.elements.option.value = '';
  }

  render() {
    return (
      <form onSubmit={this.addOption}>
        <input type="text" name="option" placeholder="I want to..." />
        <Action />
      </form>
    );
  }
}

class Action extends React.Component {
  render() {
    return <button onClick={this.doTheThing}>Make Up My Mind!</button>;
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));