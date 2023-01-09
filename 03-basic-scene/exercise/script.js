 // creat scene first 
const scene = new THREE.Scene()

// create Object 
// start with shape
const geomtry = new THREE.BoxGeometry(1, 1, 1)
// matierial
const material = new THREE.MeshBasicMaterial({ color:'red' })
const mesh = new THREE.Mesh(geomtry, material)

scene.add(mesh)

// Camera
 // first parameter is fov (field of view)
 // second parameter is aspec ration here is sizes 
const sizes={
   width: 800,
   height: 600
 }

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// set position of camera
camera.position.z = 3
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl')

const renderer = new THREE.WebGLRenderer({
   canvas 
 })

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)



