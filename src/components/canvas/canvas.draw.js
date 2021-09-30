export function drawLine(context, x1, y1, x2, y2, color, isDashed = false) {
  const dash = isDashed ? [4, 8] : [1, 0];

  context.strokeStyle = color;
  context.setLineDash(dash);

  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
}
