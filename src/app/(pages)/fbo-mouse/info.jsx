import Link from "next/link";

const link = "/fbo-mouse";
const title = "FBO Mouse Trail";
export const fboData = {
  title,
  link,
  description: (
    <>
      <h3> FBO Mouse Trail</h3>
      <p>
        Implementation of a basic mouse trail obtained with FBO (Framebuffer
        Objects technique).
      </p>

      <Link href={link}>
        <img src="mouseThumb.png" alt="mouse thumbnail" />
      </Link>
      <h4>How it works</h4>
      <p>
        Render scene (or other objects/data with attachments es. positions) to a
        texture, instead of directly on the screen.
      </p>
      <ol>
        In order to do it:
        <li>create a new RenderTarget</li>
        <li>
          in the rendering loop set the renderer target to the new target,
          render the scene into it, then set renderer target to null ( = screen
          )<li>assign the texture on the new render target to a material</li>
        </li>
      </ol>
      <p>
        In the simulation material is applied a small shift in the uvs, that
        generates a 'wind effect' towards the top and left/right. In the main
        material, we show a circle that follows the mouse, calculating the
        distance of the uv coordinates of the pixel from the mouse. We apply a
        different color depending on the velocity of the mouse through an
        uniform. The mouse position has a spring effect, we apply it extending
        with 'animated' the custom shader material.
      </p>
      <h4>Other use cases</h4>
      <p>
        FBO is othen used to render particles: positions data are passed to a
        texture so the calculations are done in parallel in the GPU, optimizing
        performance.
      </p>
    </>
  ),
};
