# THREEJS DEMOS

## 1. FBO Mouse Trail

Implementation of a basic mouse trail obtained with FBO (Framebuffer Objects technique).

#### How it works

Render scene (or other objects/data with attachments es. positions) to a texture, instead of directly on the screen. In order to do it:

1. create a new RenderTarget
2. in the rendering loop set the renderer target to the new target, render the scene into it, then set renderer target to null ( = screen )
3. assign the texture on the new render target to a material

In the simulation material is applied a small shift in the uvs, that generates a 'wind effect' towards the top and left/right.
In the main material, we show a circle that follows the mouse, calculating the distance of the uv coordinates of the pixel from the mouse. We apply a different color depending on the velocity of the mouse through an uniform.
The mouse position has a spring effect, we apply it extending with 'animated' the custom shader material.

#### Other use cases

FBO is othen used to render particles: positions data are passed to a texture so the calculations are done in parallel in the GPU, optimizing performance.
