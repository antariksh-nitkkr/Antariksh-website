const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({antialias: true});
const gridhelper = new THREE.GridHelper(200,50);
const spaceTexture = new THREE.TextureLoader().load("https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
const controls = new THREE.OrbitControls(camera, renderer.domElement);
//const stars = require("../elements/stars.js");


function init(){
	renderer.setClearColor(0xe5e5e5);
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	window.addEventListener('resize', () => {
		renderer.setSize(window.innerWidth, window.innerHeight);
		camera.aspect = window.innerWidth / window.innerHeight;
		
		camera.updateProjectionMatrix();
	});

	const geometry = new THREE.SphereGeometry(15, 32, 16);
	const material = new THREE.MeshBasicMaterial( { color: 0xfdfbd3 } );
	const cube = new THREE.Mesh( geometry, material );
	scene.add( cube );

	camera.position.z = 50;
	camera.position.y = 50;

	var light = new THREE.PointLight(0xFFFFFF, 1, 500);
	light.position.set(0,0,0);
	scene.add(light);

	light = new THREE.AmbientLight( 0x404040 ); // soft white light
	scene.add( light );
	const pointLightHelper = new THREE.PointLightHelper( light);
	
	scene.add(gridhelper, pointLightHelper);

	Array(200).fill().forEach(addStar);

	scene.background = spaceTexture;
	
	animate();
}

// function addStar(){
// 	const geometry = new THREE.SphereGeometry(0.25, 24, 24);
// 	const material = new THREE.MeshStandardMaterial({
// 		//map: texture,
// 		transparent: true,
// 		color:0xffffff
// 	});
// 	const star = new THREE.Mesh(geometry, material);

// 	const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

// 	star.position.set(x,y,z);
// 	scene.add(star);
// }

const animate = function () {
		requestAnimationFrame( animate );

		// cube.rotation.x += 0.01;
		// cube.rotation.y += 0.01;

		controls.update();

		renderer.render( scene, camera );
	};


init();