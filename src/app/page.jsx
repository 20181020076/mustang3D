"use client";
import { useEffect } from 'react';

import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/Addons.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

import SceneInit from './lib/SceneInit';

function App() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    // const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    // const boxMaterial = new THREE.MeshNormalMaterial();
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // boxMesh.position.x = -100;
    // test.scene.add(boxMesh);

    // const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 6, 16);
    // const cylinderMaterial = new THREE.MeshNormalMaterial({wireframe:true});
    // const cylinderMesh = new THREE.Mesh(cylinderGeometry,cylinderMaterial);
    // cylinderMesh.position.x=1;
    // test.scene.add(cylinderMesh);

    const fbxLoader= new FBXLoader() 
    fbxLoader.load("./mustangModel/source/MustangFinal.fbx", (fbxScene)=>{
      // fbxScene.rotation.x = -Math.PI*2/7
      
      test.scene.add(fbxScene)
    })
    // const glbLoader = new GLTFLoader()
    // glbLoader.load("./mustangModel/source/mustang.glb", (glbScene) =>{
    //   test.scene.add(glbScene)
    // })

  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;