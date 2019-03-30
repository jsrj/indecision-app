console.log('Visibility Toggle loaded.');

const ROOT = document.getElementById('app');

/*GLOBAL*/
let showDetails = false;
/*GLOBAL*/


/*TEMPLATES*/
const details = (
  <div>
  <p>YEET!!!</p>
  </div>
);
/*TEMPLATES*/
  
/*FUNCTIONS*/
const toggleReveal = () => {
  showDetails = !showDetails;
  render();
};

const render = () => {
  const base = (
    <div>
      <h1>Visibility Toggle Challenge</h1>
      <button onClick={toggleReveal}>{!showDetails && 'Show' || 'Hide'} Details</button>
      <br/>
      {showDetails && details}
    </div>
  );
  ReactDOM.render(base, ROOT);
};
/*FUNCTIONS*/

render();
