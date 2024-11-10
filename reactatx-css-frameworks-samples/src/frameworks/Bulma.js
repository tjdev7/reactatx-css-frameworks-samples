import 'bulma/css/bulma.min.css';
// remove the comment dashes above to include Bulma CSS inside this page
// You can toggle the comment dashes to see how everything looks different
// from a page with a framework included to a page without it

function Bulma() {
  return (
    <div className="App">

      <h1 className="is-size-1">Bulma Framework</h1>
      <hr />
      <h3 className="is-size-2">
        Font Styles:
      </h3>
      <h1 className="is-size-1">h1 element</h1>
      <h2 className="is-size-2">h2 element</h2>
      <h3 className="is-size-3">h3 element</h3>
      <h4 className="is-size-4">h4 element</h4>
      <h5 className="is-size-5">h5 element</h5>
      <h6 className="is-size-6"></h6>
      <p className="is-size-7">p element</p>
      <hr />
      <h3 className="is-size-2">
        Typography styling:
      </h3>

      <p className="is-lowercase is-size-3">Lowercase</p>
      <p className="is-uppercase is-size-3">Uppercase</p>
      <p className="is-italic is-size-3">Italic</p>
      <p className="is-underlined is-size-3">Underlined</p>
      <hr />
      <h3 className="is-size-2">
        Typography weight:
      </h3>
      <p className="has-text-weight-normal is-size-3">normal</p>
      <p className="has-text-weight-bold is-size-3">bold</p>
      <p className="has-text-weight-semibold	is-size-3">semi bold</p>
      <p className="has-text-weight-medium is-size-3">medium</p>
      <p className="has-text-weight-light is-size-3">light</p>

      <div className="container is-widescreen">
        <hr />
        <h3 className="is-size-2">
          Buttons:
        </h3>
        <br />
        <br />
        <div className="buttons">

          <button className="button is-black">Black</button>
          <button className="button is-white">White</button>
          <button className="button is-dark">Dark</button>
          <button className="button is-light">Light</button>
          <button className="button is-primary">Primary</button>
          <button className="button is-link">Link</button>
          <button className="button is-info">Info</button>
          <button className="button is-success">Success</button>
          <button className="button is-warning">Warning</button>
          <button className="button is-danger">Danger</button>
        </div>
        <br />
        <div className="buttons">
          <button className="button is-success is-small">Small</button>
          <button className="button is-warning is-medium">Medium</button>
          <button className="button is-danger is-large">Large</button>
        </div>
      </div>


      <hr />

      <div className="container is-widescreen">
        <h3 className="is-size-2">
          Responsive grid:
        </h3>
        <br />
        <br />


        <div className="grid">
          <div className="cell">Cell 1</div>
          <div className="cell">Cell 2</div>
          <div className="cell">Cell 3</div>
          <div className="cell">Cell 4</div>
          <div className="cell">Cell 5</div>
          <div className="cell">Cell 6</div>
          <div className="cell">Cell 7</div>
          <div className="cell">Cell 8</div>
          <div className="cell">Cell 9</div>
          <div className="cell">Cell 10</div>
          <div className="cell">Cell 11</div>
          <div className="cell">Cell 12</div>
          <div className="cell">Cell 13</div>
          <div className="cell">Cell 14</div>
          <div className="cell">Cell 15</div>
          <div className="cell">Cell 16</div>
          <div className="cell">Cell 17</div>
          <div className="cell ">Cell 18</div>
          <div className="cell">Cell 19</div>
          <div className="cell">Cell 20</div>
          <div className="cell">Cell 21</div>
          <div className="cell">Cell 22</div>
          <div className="cell">Cell 23</div>
          <div className="cell is-column-gap-0">Cell 24</div>
        </div>
      </div>
      <div class="container is-widescreen">
        <br />
        <br />
        <h3 className="is-size-2">
          Columns:
        </h3>
        <div className="columns">
          <div className="column">First column</div>
          <div className="column">Second column</div>
          <div className="column">Third column</div>
          <div className="column">Fourth column</div>
        </div>
        <hr />
      </div>
      <br />
      <br />
      <div className="container is-widescreen">
        <h3 className="is-size-2">
          Input bars:
        </h3>
        <hr />
        <input
          className="input is-primary"
          type="text"
          placeholder="Primary input"
        />
        <br />
        <br />
        <input
          className="input is-link"
          type="text"
          placeholder="Link input"
        />
        <br />
        <br />
        <input
          className="input is-info"
          type="text"
          placeholder="Info input"
        />
        <br />
        <br />
        <input
          className="input is-success"
          type="text"
          placeholder="Success input"
        />
        <br />
        <br />
        <input
          className="input is-warning"
          type="text"
          placeholder="Warning input"
        />
        <br />
        <br />
        <input
          className="input is-danger"
          type="text"
          placeholder="Danger input"
        />
        <br />
        <br />
        <input className="input is-rounded" type="text" placeholder="Rounded input" />
        <br />
        <br />
        <div className="control is-loading">
          <input class="input" type="text" placeholder="Loading input" />
        </div>
      </div>
      <br />
      <br />
      <h3 className="is-size-2">
        Website sections:
      </h3>
      <br />
      <br />
      <section className="hero is-info">
        <div className="hero-body">
          <p className="title">Info hero</p>
          <p className="subtitle">Info subtitle</p>
        </div>
      </section>
      <section className="hero is-medium is-link">
        <div className="hero-body">
          <p className="title">Medium hero</p>
          <p className="subtitle">Medium subtitle</p>
        </div>
      </section>
      <section className="hero is-danger is-fullheight">
        <div className="hero-body">
          <div className="">
            <p className="title">Fullheight hero</p>
            <p className="subtitle">Fullheight subtitle</p>
          </div>
        </div>
      </section>



    </div>
  );
}

export default Bulma;
