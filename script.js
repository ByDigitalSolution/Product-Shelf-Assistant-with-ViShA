import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const API_URL = "YOUR_APPS_SCRIPT_URL"; // Replace with your deployment URL
let cart = JSON.parse(localStorage.getItem('shoprite_cart')) || [];

// 1. Initialize 3D Viewer
const container = document.getElementById('three-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Lighting
const light = new THREE.PointLight(0x00f3ff, 10);
light.position.set(5, 5, 5);
scene.add(light, new THREE.AmbientLight(0xffffff, 0.5));

// 2. Fetch Product Data
async function loadProduct() {
    const sku = new URLSearchParams(window.location.search).get('sku') || "1001";
    const res = await fetch(`${API_URL}?sku=${sku}`);
    const data = await res.json();
    
    document.getElementById('p-name').innerText = data.name;
    document.getElementById('p-price').innerText = data.price;
    document.getElementById('p-aisle').innerText = data.aisle;
}

// 3. Cart Logic
window.addToBasket = () => {
    // Adds current item to localStorage and updates UI HUD
    cart.push({sku: "1001", price: 599.99});
    localStorage.setItem('shoprite_cart', JSON.stringify(cart));
    alert("Added to Basket!");
};

animate();
function animate() { requestAnimationFrame(animate); renderer.render(scene, camera); }
