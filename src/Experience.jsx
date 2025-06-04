import {
    Html,
    ContactShadows,
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
            <color args={['#0b232e']} attach='background' />

            <PresentationControls
                global
                rotation={[0.13, 0.1, 0]}
                polar={[-0.4, 0.2]}
                azimuth={[-1, 0.75]}
                damping={0.1}
                snap
            >
                <Float rotationIntensity={0.1}>
                    <primitive object={computer.scene} position-y={-1.2}>
                        <Html
                            wrapperClass='htmlScreen'
                            transform
                            distanceFactor={1.17}
                            position={[0, 1.56, -1.4]}
                            rotation-x={-0.256}
                        >
                            {/* <iframe src='https://bruno-simon.com/html/' /> */}
                            <iframe src='https://ruimsmelo.github.io/my-portfolio/#/en' />
                        </Html>
                    </primitive>
                </Float>
            </PresentationControls>
            <ContactShadows
                position-y={-1.4}
                opacity={0.4}
                scale={5}
                blur={2.4}
            />
        </>
    )
}
