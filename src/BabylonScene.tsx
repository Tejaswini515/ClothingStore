import * as React from 'react';
import * as BABYLON from 'babylonjs';

export type SceneProps = {
  onSceneMount?: (args: SceneEventArgs) => void,
};

export type SceneEventArgs = {
  engine: BABYLON.Engine,
  scene: BABYLON.Scene,
  canvas: HTMLCanvasElement
};

class BabylonScene extends React.Component<SceneProps & React.HTMLAttributes<HTMLCanvasElement>, {}> {

  private engine: BABYLON.Engine;
  private canvas: HTMLCanvasElement;
  private scene: BABYLON.Scene;

  onResizeWindow = () => {
    if (this.engine) {
      this.engine.resize();
    }
  }

  componentDidMount () {
    this.engine = new BABYLON.Engine(this.canvas, true );
    this.scene = new BABYLON.Scene(this.engine);

    if (typeof this.props.onSceneMount === 'function') {
      this.props.onSceneMount({
        scene: this.scene,
        engine: this.engine,
        canvas: this.canvas
      });
    }
    // Resize the babylon engine when the window is resized
    window.addEventListener('resize', this.onResizeWindow);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResizeWindow);
  }

  onCanvasLoaded = (c: HTMLCanvasElement) => {
    if (c !== null) {
      this.canvas = c;
      // this.canvas.width = 600;
      // this.canvas.height = 400;
    }
  }

  render () {
    const canvasView: any = {
      margin: '1px',
    };

    const sceneView: any = {
      margin: '0',
      width: '100%',
      height: '100%',
    };

    return (
      <div style={canvasView}>
      <canvas
        style={sceneView}
        ref={this.onCanvasLoaded}
      />
      </div>
    );
  }
}

export default BabylonScene;
