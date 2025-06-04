import { Float, Environment, OrbitControls, useGLTF } from '@react-three/drei'

export default function Experience() {
    const computer = useGLTF(
        'https://threejs-journey.com/resources/models/macbook_model.gltf'
    )

    return (
        <>
            <Environment preset='city' />
            <color args={['#241a1a']} attach='background' />

            <OrbitControls makeDefault />

            <Float rotationIntensity={0.2}>
                <primitive object={computer.scene} position-y={-1.2} />
            </Float>
        </>
    )
}
