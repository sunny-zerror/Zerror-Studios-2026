import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader'

export function createGLTFLoader() {
  const renderer = new THREE.WebGLRenderer()

  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath('/draco/')

  const ktx2Loader = new KTX2Loader()
  ktx2Loader.setTranscoderPath('/basis/')
  ktx2Loader.detectSupport(renderer)

  const loader = new GLTFLoader()
  loader.setDRACOLoader(dracoLoader)
  loader.setKTX2Loader(ktx2Loader)

  return loader
}
