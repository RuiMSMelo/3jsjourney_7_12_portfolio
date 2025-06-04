import {
    Text,
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
            <color args={['rgb(1, 5, 11)']} attach='background' />

            <PresentationControls
                global
                rotation={[0.13, 0.1, 0]}
                polar={[-0.4, 0.2]}
                azimuth={[-1, 0.75]}
                damping={0.1}
                snap
            >
                <Float rotationIntensity={0.1}>
                    <rectAreaLight
                        width={2.5}
                        height={1.65}
                        intensity={65}
                        color={'rgb(18, 105, 212)'}
                        rotation={[0.1, Math.PI, 0]}
                        position={[0, 0.55, -1.15]}
                    />
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
                    <Text
                        font='./bangers-v20-latin-regular.woff'
                        fontSize={0.9}
                        position={[2, 0.75, 0.75]}
                        rotation-y={-1.25}
                        maxWidth={2}
                        textAlign='center'
                    >
                        RUI MELO
                    </Text>
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
