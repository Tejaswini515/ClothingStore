import * as React from 'react';
import PageWithScene from './PageWithScene';

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
          <PageWithScene/ >
      </div>
    );
  }
}
