import { useEffect, useRef } from "react";

export const useCanvasSetup = (
  canvasRef,
  onObjectSelected,
  onObjectDeselected
) => {
  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: (window.innerWidth / 100) * 15.5,
      height: (window.innerWidth / 100) * 17,
    });

    canvas.on("selection:created", (e) => onObjectSelected(e.target));
    canvas.on("selection:updated", (e) => onObjectSelected(e.target));
    canvas.on("selection:cleared", onObjectDeselected);

    canvasRef.current = canvas;

    return () => {
      canvas.dispose();
    };
  }, [canvasRef, onObjectSelected, onObjectDeselected]);
};
