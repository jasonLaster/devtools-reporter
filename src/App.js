import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header" />
        <div className="App-body">
          <div className="Reporter col-md-4">
            <div className="Suite">
              <div className="Test success">
                <div className="Test-title">Add Breakpoint</div>
                <div className="Test-log">
                  <div className="Test-command">
                    <div className="index">1</div>
                    <div className="method">Navigate</div>
                    <div className="summary">examples/frames.html</div>
                  </div>
                  <div className="Test-command">
                    <div className="index">2</div>
                    <div className="method">Select Source</div>
                    <div className="summary">simple1</div>
                  </div>
                  <div className="Test-command">
                    <div className="index">3</div>
                    <div className="method">Add Breakpoint</div>
                    <div className="summary">line 23</div>
                  </div>
                  <div className="Test-command">
                    <div className="index">4</div>
                    <div className="method">Add Breakpoint</div>
                    <div className="summary">line 25</div>
                  </div>

                </div>
              </div>
              <div className="Test success">
                <div className="Test-title">Toggle Breakpoint</div>
                <div className="Test-log" />
              </div>
              <div className="Test success">
                <div className="Test-title">Toggle All Breakpoints</div>
                <div className="Test-log" />
              </div>
              <div className="Test failure">
                <div className="Test-title">Select Files</div>
                <div className="Test-log" />
              </div>
              <div className="Test failure">
                <div className="Test-title">Closing Tabs</div>
              </div>
              <div className="Test success">
                <div className="Test-title">Toggling</div>
              </div>

            </div>
          </div>
          <div className="Runner col-md-8" />
        </div>
      </div>
    );
  }
}

export default App;
