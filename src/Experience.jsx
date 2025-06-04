import {
    Float,
    Environment,
    PresentationControls,
    useGLTF,
} from '@react-three/drei'

export default function Experience() {
    const computer = useGLTF(
        'https://threejs-journey.com/resources/models/macbook_model.gltf'
    )

    return (
        <>
            <Environment preset='city' />
            <color args={['#241a1a']} attach='background' />

            <PresentationControls global>
                <Float rotationIntensity={0.1}>
                    <primitive object={computer.scene} position-y={-1.2} />
                </Float>
            </PresentationControls>
        </>
    )
}
