<template>
  <div class="andon-wrapper">
    <div class="andon-label-wrapper">
            <div class="top-labels">
                <div class="label-box">Label 1</div>
                <div class="label-box">Label 2</div>
            </div>

            <div class="andon-canvas">
            <canvas
                ref="canvas"
                width="600"
                height="400"
            ></canvas>
            </div>
        </div>
  </div>
</template>


<script>
import roadImg from "@/assets/ROADPATH.jpg"; 
export default {
  name: "AndonPath",
  data() {
    return {
      processes: [
        { id: 1, x: 80,  y: 300 },
        { id: 2, x: 150, y: 300 },
        { id: 3, x: 230, y: 260 },
        { id: 4, x: 230, y: 180 },
        { id: 5, x: 230, y: 100 },
        { id: 6, x: 320, y: 100 },
        { id: 7, x: 410, y: 100 },
        { id: 8, x: 410, y: 200 },
        { id: 9, x: 410, y: 300 },
        { id: 10, x: 500, y: 300 },
      ],
      roadImage: null 
    };
  },
  mounted() {
    this.loadImage();
  },
  methods: {
    loadImage() {
      // Create a new Image object and set its source
      const img = new Image();
      img.src = roadImg; 
      img.onload = () => {
        // When the image is loaded, store it and draw the canvas
        this.roadImage = img;
        this.drawCanvas();
      };
    },

    drawCanvas() {
      // Get canvas and its drawing context
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");

      // Clear the canvas first
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the road image as the background
      ctx.drawImage(this.roadImage, 0, 0, canvas.width, canvas.height);

      // Draw each process (box + circle + number) on top of the image
      this.processes.forEach(p => {
        this.drawProcess(ctx, p);
      });
    },

    drawProcess(ctx, process) {
      const boxSize = 40;      // Size of the square box
      const circleRadius = 15; // Radius of the circle around the number

      // Convert center point → top-left for the square
      const drawX = process.x - boxSize / 2;
      const drawY = process.y - boxSize / 2;

      // Draw the square box for the process
      ctx.fillStyle = "#fff"; // White fill
      ctx.strokeStyle = "#000"; // Black border
      ctx.lineWidth = 2;
      ctx.fillRect(drawX, drawY, boxSize, boxSize);
      ctx.strokeRect(drawX, drawY, boxSize, boxSize);

      // Draw a circle around the number
      ctx.beginPath();
      ctx.arc(process.x, process.y, circleRadius, 0, Math.PI * 2);
      ctx.strokeStyle = "#000"; // Circle border color
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.closePath();

      // Draw the process ID number in the center
      ctx.fillStyle = "#000"; // Black text
      ctx.font = "16px Arial";
      ctx.textAlign = "center";    // Horizontal center
      ctx.textBaseline = "middle"; // Vertical center
      ctx.fillText(process.id, process.x, process.y);
    }
  }
};
</script>

<style scoped>
canvas {
  width: 100%;
  height: auto;
  max-width: 600px;
  border: 1px solid #ccc;
}

.andon-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;
  align-items: center;
}

.andon-label-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px; 
  padding: 20px;
}

.andon-canvas {
  position: relative;
  display: flex;
  justify-content: center;
}

.top-labels {
  display: flex;
  gap: 10px;
}

.label-box {
  padding: 5px 15px;
  background-color: #f0f0f0;
  border: 1px solid #000;
  font-weight: bold;
  text-align: center;
  user-select: none;
  cursor: default;
}
@media (min-width: 900px) {
  .andon-wrapper {
    grid-template-columns: 1fr 1fr;
  }
}


</style>
