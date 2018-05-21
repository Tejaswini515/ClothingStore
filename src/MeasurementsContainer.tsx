import * as React from 'react';
import * as GUI from 'babylonjs-gui';
import PageWithScene from './PageWithScene';

let shouldermin = 12 , shouldermax = 16, heightmin = 14, heightmax = 18,
    waistmin = 22 , waistmax = 36, bustmin = 2, bustmax = 8;

export default class MeasurementsContainer extends React.Component {

    createSliders() {
    var advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI('UI');

    var panel = new GUI.StackPanel();
    panel.width = '220px';
    panel.height = '200px';
    panel.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    panel.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_TOP;
    panel.top = '30 px';
    advancedTexture.addControl(panel);

    var headers = [
        new GUI.TextBlock(),
        new GUI.TextBlock(),
        new GUI.TextBlock(),
        new GUI.TextBlock(),
    ];

    headers.forEach(element => {
        element.height = '25px';
        element.color = 'black';
    });

    var sliders = [
        new GUI.Slider(),
        new GUI.Slider(),
        new GUI.Slider(),
        new GUI.Slider(),
    ];

    let i = 0;

    sliders.forEach(element => {
        element.height = '20px';
        element.width = '200px';
        panel.addControl(headers[i]);
        panel.addControl(element);
        i++;
    });

    headers[0].text = 'Shoulder: ' + shouldermin;
    headers[1].text = 'Height: ' + heightmin;
    headers[2].text = 'Waist: ' + waistmin;
    headers[3].text = 'Bust: ' + bustmin;

    sliders[0].value = sliders[0].minimum = shouldermin;
    sliders[0].maximum = shouldermax;

    sliders[1].value = sliders[1].minimum = heightmin;
    sliders[1].maximum = heightmax;

    sliders[2].value = sliders[2].minimum = waistmin;
    sliders[2].maximum = waistmax;

    sliders[3].value = sliders[3].minimum = bustmin;
    sliders[3].maximum = bustmax;

    return { panel, sliders, headers };
  }

  render() {
    return(
      <div>
          <PageWithScene createSliders={this.createSliders} />
      </div>
    );
  }
}