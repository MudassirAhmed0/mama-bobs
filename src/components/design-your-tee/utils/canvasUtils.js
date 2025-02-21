"use client";
import { useRef, useState } from "react";
import {
  addGraphicToCanvas,
  deleteSelectedObject,
  getCanvasPreview,
} from "./utils/canvasUtils";
import ShirtView from "./ShirtView";
import CanvasArea from "./CanvasArea";
import DesignPalette from "./DesignPalette";
import { useCanvasSetup } from "../hooks/useCanvasSetup";
import { useCanvasResize } from "../hooks/useCanvasResize";
import { useCanvasStyles } from "../hooks/useCanvasStyles";

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

  // Custom Hooks
  useCanvasSetup(canvasFrontRef, setSelectedObject, () =>
    setSelectedObject(null)
  );
  useCanvasSetup(canvasBackRef, setSelectedObject, () =>
    setSelectedObject(null)
  );
  useCanvasResize([canvasFrontRef, canvasBackRef]);
  useCanvasStyles(currentCanvasType);

  // Event Handlers
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
    addGraphicToCanvas(canvas, src);
  };

  const handlePreview = () => {
    const canvas =
      currentCanvasType === "front"
        ? canvasFrontRef.current
        : canvasBackRef.current;
    setPreviewImage(getCanvasPreview(canvas));
  };

  const handleDelete = () => {
    const canvas =
      currentCanvasType === "front"
        ? canvasFrontRef.current
        : canvasBackRef.current;
    deleteSelectedObject(canvas, selectedObject);
    setSelectedObject(null);
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
    </div>
  );
};

export default ApparelDesignTool;
