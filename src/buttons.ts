
import { HidNpadButton } from '@nx.js/constants';

let ON_SWITCH = true;
try {
  let _v = Switch;
} catch (e) {
  ON_SWITCH = false;
}
const FONT = (!ON_SWITCH) ? "Helvetica" : "system-ui"

function get_canvas(): any {
  if (!ON_SWITCH) {
    // @ts-ignore
    return document.getElementById("canvas")
  }
  return screen
}

const xscreen = get_canvas()
const ctx = xscreen.getContext('2d');

function circle(x: number, y: number, r: number, stroke: boolean, fill: boolean = false) {
  ctx.beginPath()
  ctx.arc(x, y, r, 0, 2 * Math.PI)
  if (fill)
    ctx.fill()
  if (stroke)
    ctx.stroke()
}

const buttons: any = {
  A: { x: 810, y: 250, r: 30, type: 'circle', stroke: true },
  X: { x: 740, y: 178, r: 30, type: 'circle', stroke: true },
  B: { x: 740, y: 320, r: 30, type: 'circle', stroke: true },
  Y: { x: 670, y: 250, r: 30, type: 'circle', stroke: true },
  StickL: { x: 198, y: 250, r: 120, type: 'circle', stroke: true },
  StickR: { x: 1002, y: 250, r: 120, type: 'circle', stroke: true },
  Minus: { x: 535, y: 78, r: 22, type: 'circle', stroke: true },
  Plus: { x: 665, y: 78, r: 22, type: 'circle', stroke: true },
  L: { x: 30, y: 15, w: 200, h: 80, r: 40, type: "rrect" },
  R: { x: 970, y: 15, w: 200, h: 80, r: 40, type: "rrect" },
  ZL: { x: 290, y: 15, w: 145, h: 80, r: 40, type: "rrect" },
  ZR: { x: 765, y: 15, w: 145, h: 80, r: 40, type: "rrect" },
  Up: { x: 442, y: 150, w: 55, h: 73, r: [40, 40, 0, 0], type: "rrect" },
  Down: { x: 442, y: 150 + 73 + 55, w: 55, h: 73, r: [0, 0, 40, 40], type: "rrect" },
  Left: { x: 442 - 73, y: 150 + 73, w: 73, h: 55, r: [40, 0, 0, 40], type: "rrect" },
  Right: { x: 442 + 55, y: 150 + 73, w: 73, h: 55, r: [0, 40, 40, 0], type: "rrect" },
}

export function draw_buttons(detail: any) {
  const button = detail.button || 0
  const r = 60
  const lx = (detail.lx || 0) * r
  const ly = (detail.ly || 0) * r
  const rx = (detail.rx || 0) * r
  const ry = (detail.ry || 0) * r

  ctx.clearRect(0, 0, 1280, 720)
  ctx.strokeStyle = "black"
  ctx.fillStyle = "lightblue"
  ctx.lineWidth = 8

  for (const key of Object.keys(buttons)) {
    const b = buttons[key]
    if (b.type == "circle") {
      // @ts-ignore
      circle(b.x, b.y, b.r, b.stroke, button & HidNpadButton[key])
    }
    if (b.type == "rrect") {
      ctx.beginPath()
      ctx.roundRect(b.x, b.y, b.w, b.h, b.r)
      // @ts-ignore
      if (button & HidNpadButton[key]) {
        ctx.fill()
      }
      ctx.stroke()
    }
  }

  circle(198 + lx, 250 + ly, 65, false, true)
  circle(1002 + rx, 250 + ry, 65, false, true)

}
