console.log('App.js Loaded!');
const ROOT = document.getElementById('app');

const app = {
  title: 'Indecision',
  subTitle: 'A Subtitle',
  options: []
};

const getValue = (value) => value && value;

let optionsExist = false; 

const addOption = (event) => {
  event.preventDefault();
  
  let option = event.target.elements.option.value;
  if (option) {
    let keyId = Math.random()
                    .toString()
                    .replace(RegExp('^[0-9].'), '')
    app.options.push(<li id={keyId} key={keyId}>{option}</li>);
    optionsExist = true;
    event.target.elements.option.value = '';
  }
  refresh();
};

const clearOptions = () => {
  event.preventDefault();
  app.options = [];
  optionsExist = false;
  refresh();
};

const makeDecision = () => {
  event.preventDefault();
  if (app.options.length > 0 && optionsExist) {
    let chosenOption = Math.floor(Math.random()*app.options.length);
    app.options = [app.options[chosenOption]];
  } else {
    optionsExist = false;
  }
  refresh();
}

const refresh = () => {

  let baseTemplate = (
    <div>
      <h1>{ getValue(app.title) }</h1>
      <h3>{ getValue(app.subTitle) }</h3>
      {
        (app.options && app.options.length > 0) 
          && (
            <div>
              <p>You Have {app.options.length} Options:</p>
              <ul>{app.options}</ul>
            </div>  
          )
          || <p>There Are No Options</p>
      }
      <form onSubmit={addOption}>
        <input type="text" name="option"/>
        <button>Add</button>
        &nbsp;
        <button onClick={clearOptions}>Reset</button>
        &nbsp;
        {(optionsExist && app.options.length > 1) && <button disabled={!optionsExist} onClick={makeDecision}>Choose One!</button>}
      </form>
    </div>
  );
  ReactDOM.render(baseTemplate, ROOT);
};

refresh();
