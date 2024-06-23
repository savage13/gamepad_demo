
import { GamePadState } from './gamepad'
import { draw_buttons } from './buttons'

function main() {
  new GamePadState() // Starts event loop, emits gamepad_up, gamepad_down, runs forever
  draw_buttons(0)    // Draw empty Buttons
  window.addEventListener("gamepad_down", (e) => { draw_buttons(e.detail.button) })
  window.addEventListener("gamepad_up", (e) => { draw_buttons(e.detail.button) })
}

main()

//window.addEventListener("gamepadconnected", (e) => {
//});
