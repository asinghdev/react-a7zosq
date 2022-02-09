import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Steps, Button, message } from 'antd';

const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: 'First-content',
    id: '1',
  },
  {
    title: 'Second',
    content: 'Second-content',
    id: '2',
  },
  {
    title: 'Last',
    content: 'Last-content',
    id: '3',
  },
];

var tempArray = [];

const App = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
    tempArray.push(current);
    console.log(current);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.id} title={item.id}></Step>
        ))}
      </Steps>
      <div className="steps-content">
        <Button hidden={steps[current].id == '1'} type="primary">
          {steps[current].title}
        </Button>
      </div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success('Processing complete!')}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('container'));
