import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'red' })
)

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'green' })
)

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'blue' })
)

cube2.position.x = 1.5
cube3.position.x = -1.5

group.add(cube1)
group.add(cube2)
group.add(cube3)

group.rotation.reorder('YXZ')
group.rotation.z = 0.2
group.position.y = 1

// axis helpler
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

// Sizes
const sizes = {
  width: 800,
  height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.y = 0.7
camera.position.x = 0.3

scene.add(camera)

// camera look at to object 

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
