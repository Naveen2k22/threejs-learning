import * as Three from 'three'

const renderer = new Three.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const camera = new Three.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 100)
camera.position.set( 0, 0, 100)
camera.lookAt(0, 0, 0)

const scene = new Three.Scene()

// creating a line
const material = new Three.LineBasicMaterial({
    color: 0x00ff00
})

const points = []

// adding points for the letter N
points.push( new Three.Vector3(0, -10, 0) )
points.push( new Three.Vector3(0, 10, 0) )
points.push( new Three.Vector3(10, -10, 0) )
points.push( new Three.Vector3(10, 10, 0))

const geometry = new Three.BufferGeometry().setFromPoints(points)


const line = new Three.Line(geometry, material)
scene.add(line)

renderer.render(scene, camera)