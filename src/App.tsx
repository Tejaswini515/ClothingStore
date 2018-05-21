import * as React from 'react';
import MeasurementsContainer from './MeasurementsContainer';
// import ButtonsContainer from './ButtonsContainer';

export default class App extends React.Component {

  render() {

    const demoContent: any = {
      textAlign: 'left',
      color: 'black',
      backgroundColor: '#CB89E3',
      margin: 'auto'
    };

    return(
      <div>
          <h1 style={demoContent}> Clothing Store </h1>
          <MeasurementsContainer />
      </div>
    );
  }
}
