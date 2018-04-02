import * as React from 'react';
import * as BABYLON from 'babylonjs';
import * as GUI from 'babylonjs-gui';
import BabylonScene, { SceneEventArgs } from './BabylonScene';
import CombinedContainer from './Container';

export type SliderProps = {
  createSliders?: () => SlidersInfo,
};

export type SlidersInfo = {
  // button: BABYLON.GUI.Button,
  panel:   GUI.StackPanel,
  slider1: GUI.Slider,
  header1: GUI.TextBlock
  slider2: GUI.Slider,
  header2: GUI.TextBlock
  slider3: GUI.Slider,
  header3: GUI.TextBlock
  slider4: GUI.Slider,
  header4: GUI.TextBlock
};

class PageWithScene extends React.Component<SliderProps, any> {
    onSceneMount = (e: SceneEventArgs) => {
        const { canvas, scene, engine } = e;

        const  camera = new BABYLON.UniversalCamera('UniversalCamera', new BABYLON.Vector3(0, 0.6, -3), scene);
        camera.detachControl(canvas);
        scene.clearColor = new BABYLON.Color4(1, 1, 1, 1);
        const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 0, 0), scene);
        light.intensity = 1;
        // MEASUEMENT MARKS

        let msr = new BABYLON.StandardMaterial('material', scene);
        msr.diffuseTexture = new BABYLON.Texture('./NewBlenderDesign/red.png', scene);

        var len = BABYLON.MeshBuilder.CreatePlane('len', {width: 0.005, height: 0.15}, scene);
        len.material = msr;
        len.position = new BABYLON.Vector3(0.07, 0.8, -1.5);

        var shoulder = BABYLON.MeshBuilder.CreatePlane('shoulder', {width: 0.15, height: 0.005}, scene);
        shoulder.material = msr;
        shoulder.position = new BABYLON.Vector3(0, 0.87, -1.5);

        var waist = BABYLON.MeshBuilder.CreateTorus('waist', { thickness: 0.01, diameter: 0.2, updatable: true }, scene);
        waist.position = new BABYLON.Vector3(0, 0.88, 0);
        waist.material = msr;

        var chest = BABYLON.MeshBuilder.CreateTorus('chest', { thickness: 0.01, diameter: 0.25 }, scene);
        chest.position = new BABYLON.Vector3(0, 1, 0);
        chest.material = msr;

        len.isVisible = shoulder.isVisible = waist.isVisible = chest.isVisible = false;

        let sliderData: SlidersInfo;
        sliderData = this.props.createSliders();
        console.log(sliderData);
        sliderData.panel.isVisible = false;

        BABYLON.SceneLoader.ImportMesh('', 'NewBlenderDesign/', 'hurt-me_v5.babylon', scene, function (newMeshes) {
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
          myPlane1.position = new BABYLON.Vector3(-5, 3, 5);

          let myPlane2 = BABYLON.MeshBuilder.CreatePlane('myPlane2', {width: 0.5, height: 0.5}, scene);
          let mat2 = new BABYLON.StandardMaterial('material', scene);
          myPlane2.material = mat2;
          mat2.diffuseTexture = new BABYLON.Texture('./NewBlenderDesign/Top2.jpg', scene);
          myPlane2.position = new BABYLON.Vector3(-4.3, 3, 5);

          let myPlane3 = BABYLON.MeshBuilder.CreatePlane('myPlane3' , {width: 0.5, height: 0.5}, scene);
          let mat3 = new BABYLON.StandardMaterial('material', scene);
          myPlane3.material = mat3;
          mat3.diffuseTexture = new BABYLON.Texture('./NewBlenderDesign/Top3.jpg', scene);
          myPlane3.position = new BABYLON.Vector3(-3.6, 3, 5);

          let myPlane4 = BABYLON.MeshBuilder.CreatePlane('myPlane4', {width: 0.5, height: 0.5}, scene);
          let mat4 = new BABYLON.StandardMaterial('material', scene);
          myPlane4.material = mat4;
          mat4.diffuseTexture = new BABYLON.Texture('./NewBlenderDesign/Top4.jpg', scene);
          myPlane4.position = new BABYLON.Vector3(-5, 2.3, 5);

          let myPlane5 = BABYLON.MeshBuilder.CreatePlane('myPlane5', {width: 0.5, height: 0.5}, scene);
          let mat5 = new BABYLON.StandardMaterial('material', scene);
          myPlane5.material = mat5;
          mat5.diffuseTexture = new BABYLON.Texture('./NewBlenderDesign/Top5.jpg', scene);
          myPlane5.position = new BABYLON.Vector3(-4.3, 2.3, 5);

          let myPlane6 = BABYLON.MeshBuilder.CreatePlane('myPlane6' , {width: 0.5, height: 0.5}, scene);
          let mat6 = new BABYLON.StandardMaterial('material', scene);
          myPlane6.material = mat6;
          mat6.diffuseTexture = new BABYLON.Texture('./NewBlenderDesign/Top6.jpg', scene);
          myPlane6.position = new BABYLON.Vector3(-3.6, 2.3, 5);

          let topButton1 = BABYLON.MeshBuilder.CreatePlane('top1', {width: 1, height: 1}, scene);
          let tmat1 = new BABYLON.StandardMaterial('material', scene);
          topButton1.material = tmat1;
          tmat1.diffuseTexture = new BABYLON.Texture('./NewBlenderDesign/Top_11.PNG', scene);
          topButton1.position = new BABYLON.Vector3(3, 3, 5);

          let topButton2 = BABYLON.MeshBuilder.CreatePlane('top2', {width: 1, height: 1}, scene);
          let tmat2 = new BABYLON.StandardMaterial('material', scene);
          topButton2.material = tmat2;
          tmat2.diffuseTexture = new BABYLON.Texture('./NewBlenderDesign/Top_12.PNG', scene);
          topButton2.position = new BABYLON.Vector3(3, 1.5, 5);

          let topButton3 = BABYLON.MeshBuilder.CreatePlane('top3' , {width: 1, height: 1}, scene);
          let tmat3 = new BABYLON.StandardMaterial('material', scene);
          topButton3.material = tmat3;
          tmat3.diffuseTexture = new BABYLON.Texture('./NewBlenderDesign/Top_13.PNG', scene);
          topButton3.position = new BABYLON.Vector3(3, 0, 5);

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

          let zoomoutButton = BABYLON.MeshBuilder.CreatePlane('zoomoutbutton', {width: 0.5, height: 0.5}, scene);
          let zobmat = new BABYLON.StandardMaterial('material', scene);
          zoomoutButton.material = zobmat;
          zobmat.diffuseTexture = new BABYLON.Texture('./NewBlenderDesign/zoomout.jpg', scene);
          zoomoutButton.position = new BABYLON.Vector3(-4.5, 1.5, 5);

          zoomoutButton.actionManager = new BABYLON.ActionManager(scene);
          zoomoutButton.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
            if (group.position.z < 2) {
              group.position.z += 0.2;
              // console.log('ZOOMING OUT', group.position.z);
            }
          }));

          let zoominButton = BABYLON.MeshBuilder.CreatePlane('zoominbutton', {width: 0.5, height: 0.5}, scene);
          let zibmat = new BABYLON.StandardMaterial('material', scene);
          zoominButton.material = zibmat;
          zibmat.diffuseTexture = new BABYLON.Texture('./NewBlenderDesign/zoomin.jpg', scene);
          zoominButton.position = new BABYLON.Vector3(-3.9, 1.5, 5);

          zoominButton.actionManager = new BABYLON.ActionManager(scene);
          zoominButton.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
              if (group.position.z > -1.4) {
                group.position.z -= 0.2;
                // console.log('ZOOMING in', group.position.z);
              }
          }));

          canvas.addEventListener('pointerdown', rmv_pd, true);
          canvas.addEventListener('pointermove', rmv_pm, true);

          let measure = BABYLON.MeshBuilder.CreatePlane('measurementButton' , {width: 1, height: 1}, scene);
          let msrmat = new BABYLON.StandardMaterial('material', scene);
          measure.material = msrmat;
          msrmat.diffuseTexture = new BABYLON.Texture('./NewBlenderDesign/measurement.jpg', scene);
          measure.position = new BABYLON.Vector3(-4.2, 0.5, 5);

          measure.actionManager = new BABYLON.ActionManager(scene);
          measure.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
              len.isVisible = shoulder.isVisible = waist.isVisible = chest.isVisible = true;
              sliderData.panel.isVisible = true;
              canvas.removeEventListener('pointerdown', rmv_pd, true);
              canvas.removeEventListener('pointermove', rmv_pm, true);
              group.rotation.y = 0;
              console.log(group.rotation.y);
          }));

          let reset = BABYLON.MeshBuilder.CreatePlane('reset' , {width: 0.5, height: 0.5}, scene);
          let resetmat = new BABYLON.StandardMaterial('material', scene);
          reset.material = resetmat;
          resetmat.diffuseTexture = new BABYLON.Texture('./NewBlenderDesign/reset.png', scene);
          reset.position = new BABYLON.Vector3(-4.2, -0.5, 5);

          reset.actionManager = new BABYLON.ActionManager(scene);
          reset.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
              len.isVisible = shoulder.isVisible = waist.isVisible = chest.isVisible = false;
              canvas.addEventListener('pointerdown', rmv_pd, true);
              canvas.addEventListener('pointermove', rmv_pm, true);
          }));

          function rmv_pd(evt) {
            x = evt.clientX;
            clicked = true;
          }

          function rmv_pm(evt) {
              if (!clicked) {
                return;
              }
              group.rotation.y = (evt.clientX - x) / 1000.0;
           }

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
                <CombinedContainer />
            </div>
        );
    }
}

export default PageWithScene;
