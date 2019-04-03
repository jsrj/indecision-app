class IndecisionApp extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      title: 'Indecision',
      subTitle: 'Make Up Your Mind With The Help of Randomness',
      optionList: ['One Thing', 'Two Thing', 'Red Thing', 'Blue Thing']
    }

    this.removeOptions = this.removeOptions.bind(this);
  }

  addOption(option) {

  }

  removeOptions() {
    this.setState(() => {
      return {
        optionList: []
      }
    });
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} subTitle={this.state.subTitle} />
        <Options 
          removeOptions={this.removeOptions}
          optionList={this.state.optionList} 
        />
        <AddOption optionList={this.state.optionList} />
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
        } Options:
        </span>
        <ul>
        {
          this.props.optionList.map (
            option => <Option key={option+Math.random()} option={option} />
          )
        }
        </ul>

        <br/>

        <button onClick={this.props.removeOptions}>Reset</button>
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
  constructor(p) {
    super(p);

    this.state = {
      optionList: this.props.optionList
    }

    this.addOption = this.addOption.bind(this);
  }

  addOption(event) {
    event.preventDefault();

    let option = event.target.elements.option.value.trim();
    if (option) {

      this.setState((prev) => {
        return {
          optionList: prev.optionList + option
        }
      });
    }
    event.target.elements.option.value = '';
  }

  render() {
    return (
      <form onSubmit={this.addOption}>
        <input type="text" name="option" placeholder="I want to..." />
        <button>Add Option</button>
        <Action hasOptions={this.state.optionList.length > 0} />
      </form>
    );
  }
}

class Action extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      hasOptions: this.props.hasOptions
    }
  }
  render() {
      return (
        <button 
          disabled={!this.props.hasOptions} 
          onClick={this.doTheThing}
        >
        Make Up My Mind!
        </button>
      );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));