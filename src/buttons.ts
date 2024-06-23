
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


const d = 35
const pos: { [key: string]: [number, number] } = {
  A: [d, 0], B: [0, d], X: [0, -d], Y: [-d, 0],
  Right: [d - 400, 0], Down: [-400, d], Up: [-400, -d], Left: [-d - 400, 0],
  StickRRight: [d - 100, 100], StickRDown: [-100, d + 100], StickRUp: [-100, -d + 100], StickRLeft: [-d - 100, 100],
  StickLRight: [d - 300, 100], StickLDown: [-300, d + 100], StickLUp: [-300, -d + 100], StickLLeft: [-d - 300, 100],
  L: [-350, -100], R: [-50, -100], ZL: [-300, -130], ZR: [-100, -130], Minus: [-300, -40], Plus: [-100, -40],
}
const trans: any = {
  "Minus": "-", "Plus": "+",
  "StickRLeft": "<", "StickRRight": ">", "StickRUp": "^", "StickRDown": "v",
  "StickLLeft": "<", "StickLRight": ">", "StickLUp": "^", "StickLDown": "v",
  "Left": "<", "Right": ">", "Up": "^", "Down": "v",
}

export function draw_buttons(button: HidNpadButton) {
  const x0 = 1280 / 2
  const y0 = 720 / 2
  ctx.font = `22px ${FONT}`
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = "black"
  for (const [key, xy] of Object.entries(pos)) {
    ctx.save()
    ctx.beginPath()
    ctx.strokeStyle = "black"
    ctx.lineWidth = 2
    let x = x0 + xy[0]
    let y = y0 + xy[1]
    ctx.arc(x, y, 20, 0, 2.0 * Math.PI)
    ctx.fillStyle = 'white'
    ctx.fill()
    ctx.stroke()
    ctx.fillStyle = "black"
    let k = trans[key] || key
    ctx.fillText(k, x - 1, y + 1)
    ctx.restore()
  }

  for (const key of Object.keys(pos)) {
    // @ts-ignore
    if (button & HidNpadButton[key]) {
      if (key in pos) {
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "gray"
        let x = x0 + pos[key][0]
        let y = y0 + pos[key][1]
        ctx.arc(x, y, 20, 0, 2.0 * Math.PI)
        ctx.fill()
        let k = trans[key] || key
        ctx.fillStyle = "white"
        ctx.fillText(k, x, y)
        ctx.restore()
      }
    }
  }
}
