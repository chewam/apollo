import { useEffect } from 'react';
import { FreeCamera, Vector3 } from 'babylonjs';

const Camera = props => {

  useEffect(() => {
    console.log('useEffect Camera', props.scene);
    if (props.scene) {
      const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), props.scene)
      camera.setTarget(Vector3.Zero());
      camera.attachControl(props.canvas, false);
    }
  }, [props.canvas, props.scene]);

  return null;

};

export default Camera;
