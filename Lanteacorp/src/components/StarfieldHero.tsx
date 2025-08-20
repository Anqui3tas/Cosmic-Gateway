import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Props { intensity?: number; speed?: number; }
export default function StarfieldHero({ intensity = 2000, speed = 0.0005 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.WebGLRenderingContext) return;
    const canvas = canvasRef.current!;
    const renderer = new THREE.WebGLRenderer({ canvas });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 1, 4000);
    camera.position.z = 1;
    const stars = new THREE.BufferGeometry();
    const positions: number[] = [];
    for (let i = 0; i < intensity; i++) {
      positions.push((Math.random() * 2 - 1) * 1000, (Math.random() * 2 - 1) * 1000, (Math.random() * 2 - 1) * 1000);
    }
    stars.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: 0xffffff, size: 1 });
    const points = new THREE.Points(stars, material);
    scene.add(points);
    function animate() {
      requestAnimationFrame(animate);
      points.rotation.y += speed;
      renderer.render(scene, camera);
    }
    animate();
    return () => { renderer.dispose(); };
  }, [intensity, speed]);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
