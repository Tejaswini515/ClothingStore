import * as React from 'react';
import * as GUI from 'babylonjs-gui';
import PageWithScene from './PageWithScene';

export default class MeasurementsContainer extends React.Component {

    createSliders() {
    var advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI('UI');

    // var button = BABYLON.GUI.Button.CreateSimpleButton('but', 'Submit');
    // button.width = 0.1;
    // button.height = '40px';
    // button.cornerRadius = 20;
    // button.color = 'Orange';
    // button.thickness = 2;
    // button.background = 'green';
    // button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    // button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    // button.left = '-290 px';
    // button.top = '-120px';
    // advancedTexture.addControl(button);

    var panel = new GUI.StackPanel();
    panel.width = '220px';
    panel.height = '200px';
    panel.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    panel.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_TOP;
    panel.top = '30 px';
    advancedTexture.addControl(panel);

    /* function createHeaders(text, height, color) {
      let header = new GUI.TextBlock();
      header.text = text;
      header.height = height;
      header.color = color;
      panel.addControl(header);
    return  { header } ;
  }

  const header[1] = createHeaders('Shoulder: 13', '25px', 'black'); */

    var header1 = new GUI.TextBlock();
    header1.text = 'Shoulder: 13 ';
    header1.height = '25px';
    header1.color = 'black';
    panel.addControl(header1);

    const slider1 = new GUI.Slider();
    slider1.minimum = 13;
    slider1.maximum = 15;
    slider1.value = 13;
    slider1.height = '20px';
    slider1.width = '200px';
    panel.addControl(slider1);

    var header2 = new GUI.TextBlock();
    header2.text = 'Height: 14';
    header2.height = '25px';
    header2.color = 'black';
    panel.addControl(header2);

    var slider2 = new GUI.Slider();
    slider2.minimum = 14;
    slider2.maximum = 18 ;
    slider2.value = 14;
    slider2.height = '20px';
    slider2.width = '200px';
    panel.addControl(slider2);

    var header3 = new GUI.TextBlock();
    header3.text = 'Waist: 24';
    header3.height = '25px';
    header3.color = 'black';
    header3.left = 0;
    header3.top = 100;
    panel.addControl(header3);

    var slider3 = new GUI.Slider();
    slider3.minimum = 24;
    slider3.maximum = 32 ;
    slider3.value = 24;
    slider3.height = '20px';
    slider3.width = '200px';
    panel.addControl(slider3);

    var header4 = new GUI.TextBlock();
    header4.text = 'Bust: 2';
    header4.height = '25px';
    header4.color = 'black';
    panel.addControl(header4);

    var slider4 = new GUI.Slider();
    slider4.minimum = 2;
    slider4.maximum = 8 ;
    slider4.value = 2;
    slider4.height = '20px';
    slider4.width = '200px';
    panel.addControl(slider4);

    // panel.isVisible = false;

    return { panel, slider1, header1, slider2, header2, slider3, header3, slider4, header4 };
  }

  render() {
    return(
      <div>
          <PageWithScene createSliders={this.createSliders} />
      </div>
    );
  }
}
