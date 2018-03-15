import * as React from 'react';
import * as BABYLON from 'babylonjs';
import BabylonScene from './BabylonScene';

export type SceneEventArgs = {
  engine: BABYLON.Engine,
  scene: BABYLON.Scene,
  canvas: HTMLCanvasElement
};

class PageWithScene extends React.Component<{}, {}> {
    onSceneMount = (e: SceneEventArgs) => {
        const { canvas, scene, engine } = e;

        const  camera = new BABYLON.UniversalCamera('UniversalCamera', new BABYLON.Vector3(0, 0.5, -3), scene);
        camera.detachControl(canvas);
        scene.clearColor = new BABYLON.Color4(1, 1, 1, 1);
        const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 0, 0), scene);
        light.intensity = 1;

        BABYLON.SceneLoader.ImportMesh('', 'NewBlenderDesign/', 'hurt-me_v5.babylon', scene, function (newMeshes) {
          // rotateMesh.bind(this, this.newMeshes);
          console.log('Image rendered');
          rotateMesh(newMeshes);
        });

        var x;
        var clicked;

        function rotateMesh(mesh) {
            const group = mesh[0];
            const top1 = mesh[4];
            const top2 = mesh[3];
            const top3 = mesh[1];
            top1.isVisible = top2.isVisible = false;

          let myPlane1 = BABYLON.MeshBuilder.CreatePlane('myPlane1', {width: 0.5, height: 0.5}, scene);
          let mat1 = new BABYLON.StandardMaterial('material', scene);
          myPlane1.material = mat1;
          mat1.diffuseTexture = new BABYLON.Texture('./NewBlenderDesign/Top1.jpg', scene);
          myPlane1.position = new BABYLON.Vector3(-5, 2, 5);

          let myPlane2 = BABYLON.MeshBuilder.CreatePlane('myPlane2', {width: 0.5, height: 0.5}, scene);
          let mat2 = new BABYLON.StandardMaterial('material', scene);
          myPlane2.material = mat2;
          mat2.diffuseTexture = new BABYLON.Texture('./NewBlenderDesign/Top2.jpg', scene);
          myPlane2.position = new BABYLON.Vector3(-4.3, 2, 5);

          let myPlane3 = BABYLON.MeshBuilder.CreatePlane('myPlane3' , {width: 0.5, height: 0.5}, scene);
          let mat3 = new BABYLON.StandardMaterial('material', scene);
          myPlane3.material = mat3;
          mat3.diffuseTexture = new BABYLON.Texture('./NewBlenderDesign/Top3.jpg', scene);
          myPlane3.position = new BABYLON.Vector3(-3.6, 2, 5);

          let myPlane4 = BABYLON.MeshBuilder.CreatePlane('myPlane4', {width: 0.5, height: 0.5}, scene);
          let mat4 = new BABYLON.StandardMaterial('material', scene);
          myPlane4.material = mat4;
          mat4.diffuseTexture = new BABYLON.Texture('./NewBlenderDesign/Top4.jpg', scene);
          myPlane4.position = new BABYLON.Vector3(-5, 1.3, 5);

          let myPlane5 = BABYLON.MeshBuilder.CreatePlane('myPlane5', {width: 0.5, height: 0.5}, scene);
          let mat5 = new BABYLON.StandardMaterial('material', scene);
          myPlane5.material = mat5;
          mat5.diffuseTexture = new BABYLON.Texture('./NewBlenderDesign/Top5.jpg', scene);
          myPlane5.position = new BABYLON.Vector3(-4.3, 1.3, 5);

          let myPlane6 = BABYLON.MeshBuilder.CreatePlane('myPlane6' , {width: 0.5, height: 0.5}, scene);
          let mat6 = new BABYLON.StandardMaterial('material', scene);
          myPlane6.material = mat6;
          mat6.diffuseTexture = new BABYLON.Texture('./NewBlenderDesign/Top6.jpg', scene);
          myPlane6.position = new BABYLON.Vector3(-3.6, 1.3, 5);

          let topButton1 = BABYLON.MeshBuilder.CreatePlane('top1', {width: 1, height: 1}, scene);
          let tmat1 = new BABYLON.StandardMaterial('material', scene);
          topButton1.material = tmat1;
          tmat1.diffuseTexture = new BABYLON.Texture('./NewBlenderDesign/Top_11.PNG', scene);
          topButton1.position = new BABYLON.Vector3(4, 3, 5);

          let topButton2 = BABYLON.MeshBuilder.CreatePlane('top2', {width: 1, height: 1}, scene);
          let tmat2 = new BABYLON.StandardMaterial('material', scene);
          topButton2.material = tmat2;
          tmat2.diffuseTexture = new BABYLON.Texture('./NewBlenderDesign/Top_12.PNG', scene);
          topButton2.position = new BABYLON.Vector3(4, 1.5, 5);

          let topButton3 = BABYLON.MeshBuilder.CreatePlane('top3' , {width: 1, height: 1}, scene);
          let tmat3 = new BABYLON.StandardMaterial('material', scene);
          topButton3.material = tmat3;
          tmat3.diffuseTexture = new BABYLON.Texture('./NewBlenderDesign/Top_13.PNG', scene);
          topButton3.position = new BABYLON.Vector3(4, 0, 5);

          myPlane1.actionManager = new BABYLON.ActionManager(scene);
          myPlane1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
              top1.material = top2.material = top3.material = mat1;
          }));

          myPlane2.actionManager = new BABYLON.ActionManager(scene);
          myPlane2.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
              top1.material = top2.material = top3.material = mat2;
          }));

          myPlane3.actionManager = new BABYLON.ActionManager(scene);
          myPlane3.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
              top1.material = top2.material = top3.material = mat3;
          }));

          myPlane4.actionManager = new BABYLON.ActionManager(scene);
          myPlane4.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
              top1.material = top2.material = top3.material = mat4;
          }));

          myPlane5.actionManager = new BABYLON.ActionManager(scene);
          myPlane5.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
              top1.material = top2.material = top3.material = mat5;
          }));

          myPlane6.actionManager = new BABYLON.ActionManager(scene);
          myPlane6.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
              top1.material = top2.material = top3.material = mat6;
          }));

          topButton1.actionManager = new BABYLON.ActionManager(scene);
          topButton1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
              top2.isVisible = top3.isVisible = false;
              top1.isVisible = true;
          }));

          topButton2.actionManager = new BABYLON.ActionManager(scene);
          topButton2.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
              top1.isVisible = top3.isVisible = false;
              top2.isVisible = true;
          }));

          topButton3.actionManager = new BABYLON.ActionManager(scene);
          topButton3.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
              top1.isVisible = top2.isVisible = false;
              top3.isVisible = true;
          }));

          canvas.addEventListener('pointerdown', function (evt) {
            x = evt.clientX;
            clicked = true;
          });

          canvas.addEventListener('pointermove', function (evt) {
             if (!clicked) {
               return;
             }
             group.rotation.y = (evt.clientX - x) / 1000.0;
          });

          canvas.addEventListener('pointerup', function (evt) {
             clicked = false;
          });
        }

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

export default PageWithScene;
