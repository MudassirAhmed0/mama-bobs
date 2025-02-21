import { useEffect, useRef } from "react";

export const useCanvasStyles = (currentCanvasType) => {
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    const applyCanvasStyles = () => {
      const frontCanvas = document.getElementById("canvasFront");
      const backCanvas = document.getElementById("canvasBack");

      if (currentCanvasType === "front") {
        frontCanvas.parentElement.style.zIndex = "2";
        frontCanvas.style.pointerEvents = "auto";
        frontCanvas.style.opacity = "1";
        backCanvas.style.pointerEvents = "none";
        backCanvas.style.opacity = "0";
      } else {
        backCanvas.parentElement.style.zIndex = "2";
        backCanvas.style.pointerEvents = "auto";
        backCanvas.style.opacity = "1";
        frontCanvas.style.pointerEvents = "none";
        frontCanvas.style.opacity = "0";
      }
    };

    if (isFirstRenderRef.current) {
      const timeout = setTimeout(() => {
        applyCanvasStyles();
        const backCanvasContainer =
          document.getElementById("canvasBack").parentElement;
        backCanvasContainer.style.position = "absolute";
        backCanvasContainer.style.top = "0";
        backCanvasContainer.style.left = "0";
        isFirstRenderRef.current = false;
      }, 1000);

      return () => clearTimeout(timeout);
    } else {
      applyCanvasStyles();
    }
  }, [currentCanvasType]);
};
