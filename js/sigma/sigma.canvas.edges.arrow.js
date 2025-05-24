sigma.canvas.edges.arrow = function(edge, source, target, context, settings) {
  var color = edge.color || source.color;
  var size = edge.size || 1;

  // Рисуем линию
  context.strokeStyle = color;
  context.lineWidth = size;
  context.beginPath();
  context.moveTo(source.x, source.y);
  context.lineTo(target.x, target.y);
  context.stroke();

  // Рисуем стрелку
  var headlen = 10; // длина стрелки
  var angle = Math.atan2(target.y - source.y, target.x - source.x);

  context.beginPath();
  context.moveTo(target.x, target.y);
  context.lineTo(
    target.x - headlen * Math.cos(angle - Math.PI / 6),
    target.y - headlen * Math.sin(angle - Math.PI / 6)
  );
  context.lineTo(
    target.x - headlen * Math.cos(angle + Math.PI / 6),
    target.y - headlen * Math.sin(angle + Math.PI / 6)
  );
  context.lineTo(target.x, target.y);
  context.fillStyle = color;
  context.fill();
};
