import { useEffect } from 'react';
import { Mesh } from 'babylonjs';

const Earth = props => {

  const radius = 6378.1;

  useEffect(() => {
    console.log('useEffect Earth', props.scene);
    if (props.scene) {
      Mesh.CreateSphere('earth', 32, 1, props.scene, false, Mesh.FRONTSIDE);
    }
  }, [props.scene]);

  return null;

};

export default Earth;
