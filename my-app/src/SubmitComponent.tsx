import * as React from 'react';
// import * as GUI from 'babylonjs-gui';
import { Dispatch } from 'redux';

export type newVal = {
    name: string,
    value: number
};

export type CountProps = {
  submitFun?: () => Dispatch<any>,
  newValue: newVal,
};

class SubmitComponent extends React.Component < CountProps, any > {
  render() {
    return (
       <div>
       <button onClick={this.props.submitFun}>New State Button</button>
       </div>
    );
  }
}

export default SubmitComponent;
