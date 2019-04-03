class VisibilityToggle extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      showDetails: false
    }

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState((prev) => {
      return {
        showDetails: !prev.showDetails
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle Challenge</h1>
        <button onClick={this.toggleVisibility}>{!this.state.showDetails && 'Show' || 'Hide'} Details</button>
        <br/>
        {this.state.showDetails && <Details />}
      </div>
    );
  }
}

class Details extends React.Component {
  render() {
    return (
      <div>
        <p>YEET!!!</p>
      </div>
    )
  }
}

const ROOT = document.getElementById('app');
ReactDOM.render(<VisibilityToggle />, ROOT);
