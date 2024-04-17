const canvas = document.querySelector('.webgl');

const size = {
  height: 600,
  weight: 800,
};

const scene = new THREE.Scene();

// const geometry = new THREE.BOXGeometry(1, 1, 1);
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: '#ff0000' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const camera = new THREE.PerspectiveCamera(75, size.weight / size.height);
camera.position.z = 3;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(size.weight, size.height);
renderer.render(scene, camera);
