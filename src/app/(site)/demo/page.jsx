"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PixelCollapseScroll() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const sources = [
      `/images/outTeam/1.png`,
      `/images/outTeam/2.png`,
      `/images/outTeam/3.png`,
      `/images/outTeam/4.png`
    ];

    const images = [];
    let loaded = 0;

    const ROW_HEIGHT = 30;
    let ROWS = 0;

    function getContainRect(img, cw, ch) {
      const imgRatio = img.width / img.height;
      const canvasRatio = cw / ch;

      let drawWidth, drawHeight;

      if (imgRatio > canvasRatio) {
        drawWidth = cw;
        drawHeight = cw / imgRatio;
      } else {
        drawHeight = ch;
        drawWidth = ch * imgRatio;
      }

      return {
        x: (cw - drawWidth) / 2,
        y: (ch - drawHeight) / 2,
        width: drawWidth,
        height: drawHeight,
      };
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ROWS = Math.ceil(canvas.height / ROW_HEIGHT);
      draw(0);
    }

    window.addEventListener("resize", resize);

    sources.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        if (loaded === sources.length) init();
      };
      images.push(img);
    });

    function init() {
      resize();

      const state = { p: 0 };

      gsap.to(state, {
        p: images.length - 1,
        ease: "none",
        scrollTrigger: {
          trigger: canvas,
          start: "top top",
          end: "+=400%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
        onUpdate: () => draw(state.p),
      });
    }

    function draw(progress) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const index = Math.floor(progress);
      const local = progress - index;

      const current = images[index];
      const next = images[index + 1];

      // CURRENT IMAGE
      if (current) {
        const rect = getContainRect(
          current,
          canvas.width,
          canvas.height
        );

        for (let r = 0; r < ROWS; r++) {
          const yCanvas =
            canvas.height - (r + 1) * ROW_HEIGHT;

          if (
            yCanvas + ROW_HEIGHT < rect.y ||
            yCanvas > rect.y + rect.height
          )
            continue;

          const srcY =
            ((yCanvas - rect.y) / rect.height) *
            current.height;
          const srcH =
            (ROW_HEIGHT / rect.height) * current.height;

          ctx.drawImage(
            current,
            0,
            srcY,
            current.width,
            srcH,
            rect.x,
            yCanvas,
            rect.width,
            ROW_HEIGHT
          );
        }
      }

      // NEXT IMAGE HARD REVEAL
      if (next) {
        const rectNext = getContainRect(
          next,
          canvas.width,
          canvas.height
        );

        const revealRows = Math.floor(local * ROWS);

        for (let r = 0; r < revealRows; r++) {
          const yCanvas =
            canvas.height - (r + 1) * ROW_HEIGHT;

          if (
            yCanvas + ROW_HEIGHT < rectNext.y ||
            yCanvas > rectNext.y + rectNext.height
          )
            continue;

          const srcY =
            ((yCanvas - rectNext.y) / rectNext.height) *
            next.height;
          const srcH =
            (ROW_HEIGHT / rectNext.height) *
            next.height;

          ctx.drawImage(
            next,
            0,
            srcY,
            next.width,
            srcH,
            rectNext.x,
            yCanvas,
            rectNext.width,
            ROW_HEIGHT
          );
        }
      }
    }

    return () => {
      window.removeEventListener("resize", resize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen">
        <canvas ref={canvasRef} />
      </div>
    </section>
  );
}

