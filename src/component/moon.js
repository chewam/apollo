import { useEffect } from 'react';
import { Mesh } from 'babylonjs';

const Moon = props => {

  const radius = 1738.1/6378.1;
  const distance = 384402/6378.1/10;

  useEffect(() => {
    console.log('useEffect Moon', props.scene);
    if (props.scene) {
      const sphere = Mesh.CreateSphere('moon', 32, radius, props.scene, false, Mesh.FRONTSIDE);
      sphere.position.x = distance;
    }
  }, [props.scene, radius, distance]);

  return null;

};

export default Moon;
