import { useEffect } from 'react';
import { HemisphericLight, Vector3 } from 'babylonjs';

const Light = props => {

  useEffect(() => {
    console.log('useEffect Light', props.scene);
    if (props.scene) {
      new HemisphericLight('light1', new Vector3(0, 1, 0), props.scene);
    }
  }, [props.scene]);

  return null;

};

export default Light;
