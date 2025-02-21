"use client";
import { Trash } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import ShirtView from "./ShirtView";
import CanvasArea from "./CanvasArea";
import DesignPalette from "./DesignPalette";

const designOptions = [
  {
    type: "graphic",
    src: "/images/icons/logo.png",
    alt: "Design 1",
  },
  {
    type: "graphic",
    src: "https://img.freepik.com/free-vector/life-is-art-paint-your-dreams-typography-design-illustration_53876-8565.jpg",
    alt: "Design 2",
  },
];

const ApparelDesignTool = () => {
  const [canvasImage, setCanvasImage] = useState(
    "https://res.cloudinary.com/dks0une4w/image/upload/v1739935642/yhht1lpisuojq1kflyxn.png"
  );
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedObject, setSelectedObject] = useState(null);
  const [currentCanvasType, setCurrentCanvasType] = useState("front");

  const canvasFrontRef = useRef(null);
  const canvasBackRef = useRef(null);

  useEffect(() => {
    const initCanvas = (canvasId, canvasRef) => {
      const canvas = new fabric.Canvas(canvasId, {
        width: (window.innerWidth / 100) * 15.5,
        height: (window.innerWidth / 100) * 17,
      });
      canvasRef.current = canvas;

      canvas.on("selection:created", (e) => {
        setSelectedObject(e.target);
      });

      canvas.on("selection:updated", (e) => {
        setSelectedObject(e.target);
      });

      canvas.on("selection:cleared", () => {
        setSelectedObject(null);
      });

      return () => canvas.dispose();
    };

    const initCanvases = () => {
      initCanvas("canvasFront", canvasFrontRef);
      initCanvas("canvasBack", canvasBackRef);
    };

    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/fabric.js/4.5.0/fabric.min.js";
    script.onload = initCanvases;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      [canvasFrontRef.current, canvasBackRef.current].forEach((canvas) => {
        if (canvas) canvas.dispose();
      });
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      [canvasFrontRef.current, canvasBackRef.current].forEach((canvas) => {
        if (canvas) {
          canvas.setDimensions({
            width: (window.innerWidth / 100) * 15.5,
            height: (window.innerWidth / 100) * 17,
          });
        }
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isFirstRenderRef = useRef(true);
  useEffect(() => {
    const applyCanvasStyles = () => {
      if (currentCanvasType === "front") {
        document.getElementById("canvasFront").parentElement.style.zIndex = "2";

        const lowerCanvasesFront = document
          .getElementById("canvasFront")
          ?.parentElement.querySelectorAll("canvas");

        lowerCanvasesFront?.forEach((lowerCanvasFront) => {
          lowerCanvasFront.style.pointerEvents = "auto";
          lowerCanvasFront.style.opacity = "1";
        });

        const lowerCanvasesBack = document
          .getElementById("canvasBack")
          ?.parentElement.querySelectorAll("canvas");

        lowerCanvasesBack?.forEach((lowerCanvasBack) => {
          lowerCanvasBack.style.pointerEvents = "none";
          lowerCanvasBack.style.opacity = "0";
        });
      } else {
        document.getElementById("canvasBack").parentElement.style.zIndex = "2";
        const lowerCanvasesBack = document
          .getElementById("canvasBack")
          ?.parentElement.querySelectorAll("canvas");

        lowerCanvasesBack?.forEach((lowerCanvasBack) => {
          lowerCanvasBack.style.pointerEvents = "auto";
          lowerCanvasBack.style.opacity = "1";
        });

        const lowerCanvasesFront = document
          .getElementById("canvasFront")
          ?.parentElement.querySelectorAll("canvas");

        lowerCanvasesFront?.forEach((lowerCanvasFront) => {
          lowerCanvasFront.style.pointerEvents = "none";
          lowerCanvasFront.style.opacity = "0";
        });
      }
    };

    if (isFirstRenderRef.current) {
      const timeout = setTimeout(() => {
        applyCanvasStyles();
        const backCanvasContainer =
          document.getElementById("canvasBack")?.parentElement;
        backCanvasContainer.style.position = "absolute";
        backCanvasContainer.style.top = "0";
        backCanvasContainer.style.left = "0";
        isFirstRenderRef.current = false; // Mark as not first render
      }, 1000);

      return () => clearTimeout(timeout); // Cleanup timeout on unmount
    } else {
      applyCanvasStyles(); // Run immediately on subsequent renders
    }
  }, [currentCanvasType]);

  const handleActiveShirt = (e) => {
    const type = e.target.dataset.type;
    setCanvasImage(e.target.src);
    setCurrentCanvasType(type);
    setSelectedObject(null);
  };

  const handleAddGraphic = (src) => {
    const canvas =
      currentCanvasType === "front"
        ? canvasFrontRef.current
        : canvasBackRef.current;
    if (!canvas) return;

    fabric.Image.fromURL(src, (img) => {
      img.set({
        left: canvas.width / 2,
        top: canvas.height / 2,
        originX: "center",
        originY: "center",
        scaleX: 0.2,
        scaleY: 0.2,
        hasControls: true,
      });
      canvas.add(img);
      canvas.setActiveObject(img);
      canvas.requestRenderAll();
    });
  };

  const handlePreview = () => {
    const canvas =
      currentCanvasType === "front"
        ? canvasFrontRef.current
        : canvasBackRef.current;
    if (canvas) {
      setPreviewImage(canvas.toDataURL({ format: "png", quality: 1 }));
    }
  };

  const handleDelete = () => {
    const canvas =
      currentCanvasType === "front"
        ? canvasFrontRef.current
        : canvasBackRef.current;
    if (canvas && selectedObject) {
      canvas.remove(selectedObject);
      setSelectedObject(null);
      canvas.discardActiveObject().requestRenderAll();
    }
  };

  return (
    <div className="flex justify-between w-[95%] mx-auto mt-[10vw]">
      {/* Shirt Views */}
      <div className="min-w-[17vw] w-[17vw] h-[37vw] border-[1px] border-[#efefef] flex flex-col items-center">
        <ShirtView
          type="front"
          src="https://res.cloudinary.com/dks0une4w/image/upload/v1739935642/yhht1lpisuojq1kflyxn.png"
          currentCanvasType={currentCanvasType}
          onClick={handleActiveShirt}
        />
        <ShirtView
          type="back"
          src="https://res.cloudinary.com/dks0une4w/image/upload/v1739935642/cbeuxcz6mmj4zhijvnnh.png"
          currentCanvasType={currentCanvasType}
          onClick={handleActiveShirt}
        />
      </div>

      {/* Canvas Area */}
      <CanvasArea
        canvasImage={canvasImage}
        previewImage={previewImage}
        selectedObject={selectedObject}
        currentCanvasType={currentCanvasType}
        canvasFrontRef={canvasFrontRef}
        canvasBackRef={canvasBackRef}
        onDelete={handleDelete}
      />

      {/* Design Controls */}
      <div className="min-w-[30vw] w-[30vw] p-4 bg-[#f5f5f5]">
        <DesignPalette
          designOptions={designOptions}
          onAddGraphic={handleAddGraphic}
        />

        <div className="flex gap-4">
          <button
            onClick={handlePreview}
            className="bg-[#a16207] hover:bg-[#ca8a04] text-white rounded w-full py-3 transition-colors"
          >
            Preview
          </button>
          <button className="bg-[#a16207] hover:bg-[#ca8a04] text-white rounded w-full py-3 transition-colors">
            Buy Now
          </button>
        </div>
      </div>

      <style jsx>{`
        .active {
          border: 1px solid #dedede;
        }
        #canvas-container {
          width: 15.5vw;
          height: 17vw;
        }
      `}</style>
    </div>
  );
};

export default ApparelDesignTool;
