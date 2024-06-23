# gamepad_demo
Example of using gamepad on canvas and nxjs

Proof of concept

# Development
    npm run build

    # On Computer
    #  Uses index.html and fake-gamepad.js
    # Keys: a, b, x, y,    l, r,     - , + 
    #       Shift Up, Shift Down, Shift Right, Shift Left (D-Pad)
    #       i, j, k, m  (Left Stick)
    #       Up, Down, Left, Right (Right Stick)
    python -m http.server

    # On Switch
    npm run nro
    nxlink --address 10.0.0.1 gamepad.nro

# License
BSD 2-Clause
