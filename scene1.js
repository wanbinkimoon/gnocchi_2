export const drawScene1 = (s, p) => {
  s.background(255, 175, 0)
  s.stroke(100, 0, 255)
  s.strokeWeight(4)
  s.noFill()
  s.ellipse(p.mouseX / 2, p.mouseY / 2, 30, 30)
}