
import { GamePadState } from './gamepad'
import { draw_buttons } from './buttons'

function main() {
  new GamePadState() // Starts event loop, emits gamepad_up, gamepad_down, runs forever
  draw_buttons({})    // Draw empty Buttons
  window.addEventListener("gamepad_down", (e) => { draw_buttons(e.detail) })
  window.addEventListener("gamepad_up", (e) => { draw_buttons(e.detail) })
}

main()

//window.addEventListener("gamepadconnected", (e) => {
//});
