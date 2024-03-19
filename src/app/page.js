"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

import Link from "next/link";

import { fboData } from "./(pages)/fbo-mouse/info";
import { rotateOnScrollData } from "./(pages)/rotate-on-scroll/info";
import { lowPolyRoomData } from "./(pages)/low-poly-room/info";

import styles from "./page.module.scss";

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const elements = useMemo(() => {
    return [fboData, rotateOnScrollData, lowPolyRoomData];
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.title}>Three.js Demos</h1>
        <ul>
          {elements.map((el, i) => (
            <Item
              key={i}
              {...el}
              isOpen={openIndex === i}
              action={() => setOpenIndex(i)}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

const Item = ({ title, link, description, isOpen, action }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const overlayRef = useRef();

  useEffect(() => {
    const checkClickOutside = (e) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target)) {
        setShowOverlay(false);
      }
    };
    window.addEventListener("click", checkClickOutside);

    return () => {
      window.removeEventListener("click", checkClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) setShowOverlay(false);
  }, [isOpen]);

  useEffect(() => {
    if (showOverlay) action();
  }, [showOverlay]);
  return (
    <li>
      <div className={styles.item}>
        <Link href={link}>{title}</Link>

        {description && (
          <svg
            onClick={(e) => {
              e.stopPropagation();
              setShowOverlay((prev) => !prev);
            }}
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
              fill="currentColor"
            />
          </svg>
        )}
      </div>

      <AnimatePresence>
        {description && showOverlay && (
          <motion.div
            ref={overlayRef}
            className={styles.overlay}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          >
            {description}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};
