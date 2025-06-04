import { OrbitControls, useGLTF } from '@react-three/drei'

export default function Experience() {
    const computer = useGLTF(
        'https://threejs-journey.com/resources/models/macbook_model.gltf'
    )
    console.log(computer)

    return (
        <>
            <color args={['#241a1a']} attach='background' />

            <OrbitControls makeDefault />

            <mesh>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>
            <primitive object={computer.scene} />
        </>
    )
}
