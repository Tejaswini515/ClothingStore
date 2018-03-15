import * as React from 'react';
import * as BABYLON from 'babylonjs';
import BabylonScene from './BabylonScene';

export type SceneEventArgs = {
  engine: BABYLON.Engine,
  scene: BABYLON.Scene,
  canvas: HTMLCanvasElement
};

class PageWithScene1 extends React.Component<{}, {}> {
    onSceneMount = (e: SceneEventArgs) => {
        const { engine, scene, canvas } = e;

        const camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(canvas, true);
        const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = 0.7;
        const sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
        sphere.position.y = 1;

        engine.runRenderLoop(() => {
            if (scene) {
                scene.render();
            }
        });
    }

    render() {
        return (
            <div>
                <BabylonScene onSceneMount={this.onSceneMount} />
            </div>
        );
    }
}

export default PageWithScene1;
