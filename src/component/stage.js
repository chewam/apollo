import React, { useState, useEffect } from 'react';
import Camera from './camera';
import Light from './light';
import Earth from './earth';
import Moon from './moon';
import { Engine, Scene/*, FreeCamera, Vector3, HemisphericLight, Mesh*/ } from 'babylonjs';

const Stage = props => {

  const [canvas, setCanvas] = useState();
  const [engine, setEngine] = useState();
  const [scene, setScene] = useState();

  useEffect(() => {
    console.log('useEffect []');
    setCanvas(document.getElementById('scene'));
  }, []);

  useEffect(() => {
    if (canvas) {
      console.log('useEffect canvas');
      const config = { preserveDrawingBuffer: true, stencil: true };
      setEngine(new Engine(canvas, true, config));
    }
  }, [canvas]);

  useEffect(() => {
    if (engine) {
      console.log('useEffect engine');
      setScene(new Scene(engine));
      window.addEventListener('resize', function() {
        engine.resize();
      });
    }
  }, [engine]);

  useEffect(() => {
    if (scene) {
      console.log('useEffect scene');
      engine.runRenderLoop(function() {
        scene.render();
      });
    }
  }, [engine, scene]);

  return (
    <div>
      <canvas id="scene"></canvas>
      <Camera canvas={canvas} scene={scene} />
      <Light scene={scene} />
      <Earth scene={scene} />
      <Moon scene={scene} />
    </div>
  );

};

export default Stage;
