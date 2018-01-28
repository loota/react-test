import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Combou extends React.Component {
    render() {
        return <h2>Combou</h2>
    }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {formDisabled: false, radioSet: false, message: 'Hello React'};

    // This binding is necessary to make `this` work in the callback
    this.disableForm = this.disableForm.bind(this);
    this.teeJotain = this.teeJotain.bind(this);
    this.setRadio = this.setRadio.bind(this);
  }
  disableForm() {
    this.setState(prevState => ({
      formDisabled: !prevState.formDisabled
    }));
  }
  teeJotain() {
      this.setState(prevState => ({
          message: 'Tinttan tanttan tallallei'
      }));
  }
  setRadio(event) {
      const val = event.target.value
      this.setState(prevState => ({
          radioSet: val
      }));
  }
  render() {
    const items = [{id: 'eka', secret:false}, {id:'toka', secret:false}, {id:'salainen', secret:true}]
    const listItems = items.map(function(item, index) {
            if (!item.secret) {
              return <li key={item.id}>{index} - {item.id} {100 * 100}</li>
            }
            return ''
        })

    const Foo = () => (
      <div>
        foo
      </div>
    )

    const Bar = () => (
      <div>
        bar
      </div>
    )
    return (
      <div>
          <h1>{this.state.message}</h1>
          <Router>
              <div>
                  <ul>
                    <li><Link to="/foo">Go to foo</Link></li>
                    <li><Link to="/bar">Go to bar</Link></li>
                  </ul>

                  <Route path="/foo" component={Foo}/>
                  <Route path="/bar" component={Bar}/>
              </div>
          </Router>

          <ul>{listItems}</ul>
          <input type="text" readOnly={this.state.formDisabled} id="text"></input>
          <span>
              Raadio: {this.state.radioSet}
          </span>
          <br/>
          <input type="radio" onClick={this.setRadio} readOnly={this.state.formDisabled} name="rad" value="1"></input>
          <input type="radio" onClick={this.setRadio} readOnly={this.state.formDisabled} name="rad" value="2"></input>
          <input type="checkbox" onChange={this.disableForm}></input>
          <button onClick={this.teeJotain}>Tee jotain</button>

          <Combou/>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

