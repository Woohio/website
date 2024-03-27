import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-software-development',
  templateUrl: './software-development.component.html',
  styleUrls: ['./software-development.component.css'],
})
export class SoftwareDevelopmentComponent implements OnInit {
  scene: any;
  camera: any;
  renderer: any;
  cube: any;
  mouseX = 0;
  mouseY = 0;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.initScene();
    this.createCube();
  }

  initScene() {
    const width = this.elRef.nativeElement.clientWidth;
    const height = this.elRef.nativeElement.clientHeight;

    // Initializing the scene
    this.scene = new THREE.Scene();

    // Initializing the camera
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;

    // Initializing the renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.elRef.nativeElement.appendChild(this.renderer.domElement);
  }

  createCube() {
    // Create cube geometry and material
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Rotate cube based on mouse movement
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;

    // Render the scene
    this.renderer.render(this.scene, this.camera);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // Calculate mouse position relative to the canvas
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouseY = (-(event.clientY - rect.top) / rect.height) * 2 + 1;

    // Rotate cube based on mouse position
    this.cube.rotation.x = this.mouseY;
    this.cube.rotation.y = this.mouseX;
  }
}
