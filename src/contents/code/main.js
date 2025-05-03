print("My kWin script has loaded");

registerShortcut("Center Window", "Move window to 1920x1080 center", "Meta+Shift+C", () => {
    const client = workspace.activeWindow;
    if (!client) {
        print("No active client");
        return;
    }

    print("Client: " + client.caption);

    const area = workspace.clientArea(KWin.MaximizeArea, client);
    print(`Screen area: ${area.x},${area.y} ${area.width}x${area.height}`);

    const targetWidth = 1920;
    const targetHeight = 1080;

    const newX = area.x + Math.floor((area.width - targetWidth) / 2);
    const newY = area.y + Math.floor((area.height - targetHeight) / 2);

    print(`Moving to: (${newX}, ${newY}) size ${targetWidth}x${targetHeight}`);

    client.setMaximize(false, false);
    client.frameGeometry = {
        x: newX,
        y: newY,
        width: targetWidth,
        height: targetHeight
    };
});

