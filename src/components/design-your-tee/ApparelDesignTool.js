"use client";
import { useRef, useEffect, useState } from "react";

const ApparelDesignTool = () => {
  useEffect(() => {
    // Function to initialize the canvas
    const initCanvas = () => {
      const canvas = new fabric.Canvas("canvas", {
        width: (window.innerWidth / 100) * 13,
        height: (window.innerWidth / 100) * 17,
      });

      // Design Selection Handlers
      const designOptions = document.querySelectorAll(".design-option");
      const handleClick = (event) => {
        const type = event.currentTarget.dataset.type;
        if (type === "graphic") {
          addGraphic(event.currentTarget.dataset.src);
        }
      };

      designOptions.forEach((option) =>
        option.addEventListener("click", handleClick)
      );

      // Add Graphic Function
      function addGraphic(src) {
        fabric.Image.fromURL(src, (img) => {
          img.set({
            left: 0,
            top: 0,
            scaleX: 0.2,
            scaleY: 0.2,
            hasControls: true,
          });
          canvas.add(img);
        });
      }

      return () => {
        // Cleanup event listeners when component unmounts
        designOptions.forEach((option) =>
          option.removeEventListener("click", handleClick)
        );
        canvas.dispose();
      };
    };

    // Dynamically load Fabric.js
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/fabric.js/4.5.0/fabric.min.js";
    script.onload = initCanvas;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <div className=" flex justify-between w-[95%] mx-auto mt-[10vw]">
        <div className="min-w-[17vw] w-[17vw] h-[37vw] border-[1px] border-[#efefef] relative flex flex-col items-center">
          <img
            src="https://res.cloudinary.com/dks0une4w/image/upload/v1739935642/yhht1lpisuojq1kflyxn.png"
            alt="Tshirt"
            className="p-[2.5%] m-[2.5%] border-[1px] border-[#dedede] w-[90%] h-[45%] object-cover"
          />
          <img
            src="https://res.cloudinary.com/dks0une4w/image/upload/v1739935642/cbeuxcz6mmj4zhijvnnh.png"
            alt="Tshirt"
            className="p-[2.5%] m-[2.5%] w-[90%] h-[45%] object-cover "
          />
        </div>
        <div className="min-w-[45vw] w-[45vw] h-[37vw] border-[1px] border-[#efefef] relative bg-[#f5f5f5] flex flex-col items-center justify-center">
          <img
            src="https://lh3.googleusercontent.com/proxy/skOcRbxP2x01VnvqBBtY_bTWBD6P9DLgKYSGR0qLJBCrMMDF-S-Eu1Zzyk7u0bDaPq9clRcHcpdkvsBkn1uPg_jO4rwY5VvmeyCEvFD0uVftZKRoi1VUjgrr_ni0WNvr6_Gew82iCIsQ1RCLqka2-9CVtBiAyPVnRCLDkcWILVgtqm_sJAnAmTRrCLBq"
            alt="Tshirt"
            className="size-[80%] object-contain"
          />
          <div
            id="canvas-container"
            className="absolute top-[11vw] left-[8.4vw]"
          >
            <canvas id="canvas" />
          </div>
        </div>
        <div className="controls min-w-[30vw] w-[30vw]">
          <div className="design-palette" id="design-palette">
            <div
              className="design-option"
              data-type="graphic"
              data-src="https://img.freepik.com/free-vector/t-shirt-poster-design-with-illustraion-skeleton-professor_1284-36769.jpg?t=st=1738784270~exp=1738787870~hmac=c92ec44d8dce839e048ffa72c9c3cb54bf231287e41529f85627b86123440f13&w=826"
            >
              <img
                src="https://img.freepik.com/free-vector/t-shirt-poster-design-with-illustraion-skeleton-professor_1284-36769.jpg?t=st=1738784270~exp=1738787870~hmac=c92ec44d8dce839e048ffa72c9c3cb54bf231287e41529f85627b86123440f13&w=826"
                alt="Design 1"
                width={200}
              />
            </div>
            <div
              className="design-option"
              data-type="graphic"
              data-src="https://img.freepik.com/free-vector/life-is-art-paint-your-dreams-typography-design-illustration_53876-8565.jpg?t=st=1738784457~exp=1738788057~hmac=144241d195369b3ab7f138927ea6f5859e72d7264258f319cca3811590ef6792&w=826"
            >
              <img
                src="https://img.freepik.com/free-vector/life-is-art-paint-your-dreams-typography-design-illustration_53876-8565.jpg?t=st=1738784457~exp=1738788057~hmac=144241d195369b3ab7f138927ea6f5859e72d7264258f319cca3811590ef6792&w=826"
                alt="Design 2"
                width={200}
              />
            </div>
          </div>
        </div>
      </div>
      <style>
        {`  

     #canvas-container {
       width: 13 vw;
       border: 1px solid #ccc;
     }

     .controls {
       padding: 15px;
       background: #f5f5f5;
     }

     .design-palette {
       display: grid;
       grid-template-columns: repeat(3, 1fr);
       gap: 10px;
       margin-bottom: 20px;
     }

     .design-option {
       cursor: pointer;
       border: 2px solid transparent;
       padding: 5px;
     }

     .design-option:hover {
       border-color: #007bff;
     }

     .adjustment-controls {
       margin-top: 20px;
     }

     .control-group {
       margin-bottom: 15px;
     }

     input[type="range"] {
       width: 100%;
     }`}
      </style>
    </>
  );
};

export default ApparelDesignTool;
