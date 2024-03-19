import Link from "next/link";

const title = "3D Rotate on scroll";
const link = "/rotate-on-scroll";
export const rotateOnScrollData = {
  title,
  link,
  description: (
    <>
      <h3>Rotate on scroll</h3>
      <p>
        Showcast of a simple responsive scroll linked animation of a 3D model
        and 2D text, with dynamic clouds in the background.
      </p>

      <Link href={link}>
        <img src="rotateOnScroll.png" alt="rotate on scroll thumbnail" />
      </Link>
      <h4>How it works</h4>
      <p>
        The animation is achieved using the framer-motion library.
        <br />
        The scroll progress value is used to animate the rotation and position
        of the 3D model and the opacity of the text, through the use of
        useTransform hook.
        <br />
        Both model and text reflects an envMap of a sky.
        <br />
        Text and clouds are imported from the React Three Fiber Drei library.
        <br />
        In order to be responsive, the size of text and model are adjusted to
        the viewport size obtained from the useThree hook.
      </p>
    </>
  ),
};
