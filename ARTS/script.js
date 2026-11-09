const turbulence = document.getElementById("turbulence");
const baseFrequency = {
  x: 0.005,
  y: 0.003
}

gsap.to(baseFrequency, {
  duration: 7,
  x: 0.002,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut',
})
        
gsap.to(baseFrequency, {
  duration: 2,
  y: 0.002,
  repeat: -1,
  yoyo: true,
  ease: 'power2.inOut',
})

const animate = () => {
  gsap.set(turbulence, {
    attr: {
      baseFrequency: `${baseFrequency.x} ${baseFrequency.y}`
    }
  })
}

gsap.ticker.add(animate);
