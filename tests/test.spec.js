import { describe, it, expect } from 'vitest'
import { generatePluginCSS } from './utils.js'
describe('CSS animations', () => {
  it('should generate css code from inline general class', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-ease"></div>'
    })
    expect(css).toMatch('.animate-ease{animation-timing-function:ease}')
  })
  it('should animate delay inline general class', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-delay-100"></div>'
    })
    expect(css).toMatch('.animate-delay-100{animation-delay:100ms}')
  })
  it('should impulse rotate right from inline general class', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-impulse-rotate-right"></div>'
    })
    expect(css).toMatch('@keyframes impulse-rotation-right{0%{transform:rotate(0deg)}50%{transform:rotate(-40deg)}100%{transform:rotate(360deg)}}.animate-impulse-rotate-right{animation:impulse-rotation-right 1s ease-in-out both}')
  })
  it('should generate blurred fade in general class', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-blurred-fade-in"></div>'
    })
    expect(css).toMatch('@keyframes blurred-fade-in{0%{filter:blur(5px);opacity:0}100%{filter:blur(0);opacity:1}}.animate-blurred-fade-in{animation:blurred-fade-in 0.9s ease-in-out both}')
  })
  it('should delay animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-delay-100"></div>'
    })
    expect(css).toMatch('.animate-delay-100{animation-delay:100ms}')
  })
})
