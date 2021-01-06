import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TableHAD, {Table} from './Table';
import reportWebVitals from './reportWebVitals';

class AppTwo extends Component {
    render() {
        return (
            /*
            <div className="had">
                <h2>Welcome to HAD</h2>
            </div>
             */
            <TableHAD />
        )
    }
}

ReactDOM.render(
  <React.StrictMode>
    <AppTwo />
      <Table />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
