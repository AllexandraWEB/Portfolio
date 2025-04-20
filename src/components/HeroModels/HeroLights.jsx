const HeroLights = () => {
  return (
        <>
        {/* <ambientLight intensity={0.2} color="#1a1a40" /> */}
        {/* <directionalLight position={[5, 5, 5]} intensity={-1} /> */}
        <spotLight position = {[2, 5, 5]}
        intensity = {60}
        color="#bd90ec"/>

        <spotLight position = {[3, 2, 9]}
        angle={0.4}
        intensity = {120}
        penumbra={0.9}
        color="#e98191"/>

        <spotLight position = {[8, 1, 1]}
        angle={0.4}
        intensity = {70}
        penumbra={0.9}
        color="#e98191"/>

        <spotLight position = {[8, 1, 1]}
        angle={0.4}
        intensity = {100}
        penumbra={0.9}
        color="#d7c2ac"/>

        <spotLight position = {[1, 9, 1]}
        angle={0.4}
        intensity = {100}
        penumbra={0.9}
        color="yellow"/>

        <spotLight position = {[1, 9, 1]}
        angle={0.4}
        intensity = {300}
        penumbra={0.9}
        color="blue"/>
        </>
  )
}

export default HeroLights