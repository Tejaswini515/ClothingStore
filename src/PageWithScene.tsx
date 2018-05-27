import * as React from 'react';
import * as BABYLON from 'babylonjs';
import * as GUI from 'babylonjs-gui';
import BabylonScene, { SceneEventArgs } from './BabylonScene';

export type SliderProps = {
  createSliders?: () => SlidersInfo,
};

export type SlidersInfo = {
  panel:   GUI.StackPanel,
  headers: GUI.TextBlock[],
  sliders: GUI.Slider[],
};

let x: number;
let clicked: boolean;

class PageWithScene extends React.Component<SliderProps, any> {
  onSceneMount = (e: SceneEventArgs) => {

    const { canvas, scene, engine} = e;

        const  camera = new BABYLON.UniversalCamera('UniversalCamera', new BABYLON.Vector3(0, 0.7, -2.5), scene);
        camera.detachControl(canvas);
        scene.clearColor = new BABYLON.Color4(1, 1, 1, 1);
        const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 0, 0), scene);
        light.intensity = 1.2;

        let sliderData: SlidersInfo;
        sliderData = this.props.createSliders();
        console.log(sliderData);
        sliderData.panel.isVisible = false;

        // Loading a mesh

        BABYLON.SceneLoader.ImportMesh('', 'HumanModel/', 'human.babylon', scene, function (newMeshes) {
          rotateMesh(newMeshes);
        });

        function rotateMesh(mesh) {
            const group = mesh[0];
            const top1 = mesh[4];
            const top2 = mesh[3];
            const top3 = mesh[1];
            top1.isVisible = top2.isVisible = false;

            let dresses = [top1, top2, top3];
 // -------------------------- Creating Pattern Buttons and assiging materials------------------------------------ //
          let patternMat = [
              new BABYLON.StandardMaterial('material', scene),
              new BABYLON.StandardMaterial('material', scene),
              new BABYLON.StandardMaterial('material', scene),
              new BABYLON.StandardMaterial('material', scene),
              new BABYLON.StandardMaterial('material', scene),
              new BABYLON.StandardMaterial('material', scene),                
          ];

          let patterns = [
            BABYLON.MeshBuilder.CreatePlane('design', {width: 0.5, height: 0.5}, scene),
            BABYLON.MeshBuilder.CreatePlane('design', {width: 0.5, height: 0.5}, scene),
            BABYLON.MeshBuilder.CreatePlane('design', {width: 0.5, height: 0.5}, scene),
            BABYLON.MeshBuilder.CreatePlane('design', {width: 0.5, height: 0.5}, scene),
            BABYLON.MeshBuilder.CreatePlane('design', {width: 0.5, height: 0.5}, scene),
            BABYLON.MeshBuilder.CreatePlane('design', {width: 0.5, height: 0.5}, scene),
        ];

          function createPatternButton(i, patternImage, px, py, pz) {
              patternMat[i].diffuseTexture = new BABYLON.Texture(patternImage, scene);
              patterns[i].position = new BABYLON.Vector3(px, py, pz);
              patterns[i].material = patternMat[i];
              patterns[i].actionManager = new BABYLON.ActionManager(scene);
              patterns[i].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                  top1.material = top2.material = top3.material = patternMat[i];
              }));
          }

          createPatternButton(0, './Images/Top0.jpg', -5, 3, 5);
          createPatternButton(1, './Images/Top1.jpg', -4.3, 3, 5);
          createPatternButton(2, './Images/Top2.jpg', -3.6, 3, 5);
          createPatternButton(3, './Images/Top3.jpg', -5, 2.3, 5);
          createPatternButton(4, './Images/Top4.jpg', -4.3, 2.3, 5);
          createPatternButton(5, './Images/Top5.jpg', -3.6, 2.3, 5);

// -------------------------- Creating Design Buttons and assiging materials ------------------------------------ //
      
            let designMat = [
                new BABYLON.StandardMaterial('material', scene),
                new BABYLON.StandardMaterial('material', scene),
                new BABYLON.StandardMaterial('material', scene),              
            ];

            let designs = [
                BABYLON.MeshBuilder.CreatePlane('design', {width: 1, height: 1}, scene),
                BABYLON.MeshBuilder.CreatePlane('design', {width: 1, height: 1}, scene),
                BABYLON.MeshBuilder.CreatePlane('design', {width: 1, height: 1}, scene),
            ];

            function createDesignButton(i, designImage, px, py, pz) {
                designMat[i].diffuseTexture = new BABYLON.Texture(designImage, scene);
                designs[i].position = new BABYLON.Vector3(px, py, pz);
                designs[i].material = designMat[i];
                designs[i].actionManager = new BABYLON.ActionManager(scene);
                designs[i].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    dresses.forEach(element => {
                      element.isVisible = false;
                    });
                    dresses[i].isVisible = true;
                }));
            }

            createDesignButton(0, './Images/Top_11.PNG', 3, 3, 5);
            createDesignButton(1, './Images/Top_12.PNG', 3, 1.5, 5);
            createDesignButton(2, './Images/Top_13.PNG', 3, 0, 5);

// --------------------------------------- Measurements and Reset Buttons ---------------------------------------- //

          let msr = new BABYLON.StandardMaterial('material', scene);
          msr.diffuseTexture = new BABYLON.Texture('./Images/red.png', scene);

          let height = BABYLON.MeshBuilder.CreatePlane('height', {width: 0.005, height: 0.15}, scene);
          height.position = new BABYLON.Vector3(0.07, 0.8, -1.5);

          let shoulder = BABYLON.MeshBuilder.CreatePlane('shoulder', {width: 0.15, height: 0.005}, scene);
          shoulder.position = new BABYLON.Vector3(0, 0.88, -1.5);

          let waist = BABYLON.MeshBuilder.CreateTorus('waist', { thickness: 0.01, diameter: 0.2, updatable: true }, scene);
          waist.position = new BABYLON.Vector3(0, 0.88, 0);

          let bust = BABYLON.MeshBuilder.CreateTorus('bust', { thickness: 0.01, diameter: 0.22 }, scene);
          bust.position = new BABYLON.Vector3(0, 1, 0);

          height.material = shoulder.material = waist.material = bust.material = msr; 
          shoulder.isVisible = height.isVisible = waist.isVisible = bust.isVisible = false;

          let sval = 12;
          sliderData.sliders[0].onValueChangedObservable.add(function(value) {
            sliderData.headers[0].text = 'Shoulder: ' + value;   
                shoulder.scaling.x += (value - sval) * 0.1; 
                sval = value;
          });

          let hval = 14;
          sliderData.sliders[1].onValueChangedObservable.add(function(value) {
            sliderData.headers[1].text = 'Height: ' + value;   
                height.scaling.y += (value - hval) * 0.1; 
                hval = value;
          });

          let wval = 22;
          sliderData.sliders[2].onValueChangedObservable.add(function(value) {
            sliderData.headers[2].text = 'Waist: ' + value;   
                waist.scaling.x += (value - wval) * 0.1; 
                wval = value;
          });

          let bval = 2;
          sliderData.sliders[3].onValueChangedObservable.add(function(value) {
            sliderData.headers[3].text = 'Bust: ' + value;   
                bust.scaling.x += (value - bval) * 0.1; 
                bval = value;
          });

          let measure = BABYLON.MeshBuilder.CreatePlane('measurementButton' , {width: 1, height: 1}, scene);
          let msrmat = new BABYLON.StandardMaterial('material', scene);
          measure.material = msrmat;
          msrmat.diffuseTexture = new BABYLON.Texture('./Images/measurement.jpg', scene);
          measure.position = new BABYLON.Vector3(-4.2, 0.5, 5);

          measure.actionManager = new BABYLON.ActionManager(scene);
          measure.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
            height.isVisible = shoulder.isVisible = waist.isVisible = bust.isVisible = true;
              sliderData.panel.isVisible = true;
              console.log(group.rotation.y);
              canvas.removeEventListener('pointerdown', rmv_pd, true);
              canvas.removeEventListener('pointermove', rmv_pm, true);              
          }));
 
          // Reset Button 

          let reset = BABYLON.MeshBuilder.CreatePlane('reset' , {width: 0.5, height: 0.5}, scene);
          let resetmat = new BABYLON.StandardMaterial('material', scene);
          reset.material = resetmat;
          resetmat.diffuseTexture = new BABYLON.Texture('./Images/reset.png', scene);
          reset.position = new BABYLON.Vector3(-4.2, -0.5, 5);

          reset.actionManager = new BABYLON.ActionManager(scene);
          reset.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
              height.isVisible = shoulder.isVisible = waist.isVisible = bust.isVisible = false;
              sliderData.panel.isVisible = false;
              canvas.addEventListener('pointerdown', rmv_pd, true);
              canvas.addEventListener('pointermove', rmv_pm, true);
          }));
          
          // Submit Button

          let submit = BABYLON.MeshBuilder.CreatePlane('reset' , {width: 0.8, height: 0.5}, scene);
          let submitmat = new BABYLON.StandardMaterial('material', scene);
          submit.material = submitmat;
          submitmat.diffuseTexture = new BABYLON.Texture('./Images/submit.jpg', scene);
          submit.position = new BABYLON.Vector3(3, -1, 5);

          submit.actionManager = new BABYLON.ActionManager(scene);
          submit.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
              height.isVisible = shoulder.isVisible = waist.isVisible = bust.isVisible = false;
              sliderData.panel.isVisible = false;
              console.log('Measurements: ');
              console.log('Shoulder: ', sliderData.sliders[0].value);
              console.log('Height: ', sliderData.sliders[1].value);
              console.log('Waist: ', sliderData.sliders[2].value);
              console.log('Bust: ', sliderData.sliders[3].value);
          }));

// ------------------------------------------ ZoomIn and ZoomOut Buttons ---------------------------------------- //

    let zoomoutButton = BABYLON.MeshBuilder.CreatePlane('zoomoutbutton', {width: 0.5, height: 0.5}, scene);
    let zobmat = new BABYLON.StandardMaterial('material', scene);
    zoomoutButton.material = zobmat;
    zobmat.diffuseTexture = new BABYLON.Texture('./Images/zoomout.jpg', scene);
    zoomoutButton.position = new BABYLON.Vector3(-4.5, 1.5, 5);

    zoomoutButton.actionManager = new BABYLON.ActionManager(scene);
    zoomoutButton.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
      height.isVisible = shoulder.isVisible = waist.isVisible = bust.isVisible = false;
      sliderData.panel.isVisible = false;
      if (group.position.z < 1.6) {
        group.position.z += 0.2;
      }
    }));

    let zoominButton = BABYLON.MeshBuilder.CreatePlane('zoominbutton', {width: 0.5, height: 0.5}, scene);
    let zibmat = new BABYLON.StandardMaterial('material', scene);
    zoominButton.material = zibmat;
    zibmat.diffuseTexture = new BABYLON.Texture('./Images/zoomin.jpg', scene);
    zoominButton.position = new BABYLON.Vector3(-3.9, 1.5, 5);

    zoominButton.actionManager = new BABYLON.ActionManager(scene);
    zoominButton.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
      height.isVisible = shoulder.isVisible = waist.isVisible = bust.isVisible = false;
      sliderData.panel.isVisible = false;  
      if (group.position.z > -1.4) {
          group.position.z -= 0.2;
        }
    }));          

// ----------------------------------------------- Rotation --------------------------------------------------------------- //

        canvas.addEventListener('pointerdown', rmv_pd, true);
        canvas.addEventListener('pointermove', rmv_pm, true);

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
// -------------------------------------------------Rendering a Scene ---------------------------------------------------- //
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
