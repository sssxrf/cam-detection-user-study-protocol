# Participant Instructions

Follow the prompts in the study app. Move naturally, wait during idle periods, and press **Report Mistake** if something goes wrong. You may stop at any time.

## Start the Study Session

1. Open the app.
2. Choose the method: AR, QR, or NFC.
3. Complete any required room setup.
4. Tap **Start Detection**.
5. The app starts the session timer and begins network capture through the connected sniffer.

You do not separately operate the sniffer.

## AR + Button Method

1. Confirm the room list shown by the app.
2. Confirm the starting location if the app asks.
3. Tap **Start Detection**.
4. Stand outside the room shown in the app.
5. Tap **Start Action**.
6. Enter the room naturally.
7. Walk along the instructed path.
8. Exit the room.
9. Tap **Action Finished**.
10. Wait for the next prompt.

## QR Code Method

1. During setup, place or select one QR code near each room entrance.
2. Scan each QR code, name the room, and confirm the mapping.
3. Tap **Start Detection** after all rooms are confirmed.
4. When prompted, stand outside the target room.
5. Scan that room's QR code before entering.
6. Enter, walk naturally, and exit.
7. Scan the same QR code again after exiting.
8. Wait for the next prompt.

The app sets that room's action signal to `1` between the two scans and `0` otherwise.

## NFC Tag Method

1. During setup, place or select one NFC tag near each room entrance.
2. Tap each NFC tag, name the room, and confirm the mapping.
3. Tap **Start Detection** after all rooms are confirmed.
4. When prompted, stand outside the target room.
5. Tap that room's NFC tag before entering.
6. Enter, walk naturally, and exit.
7. Tap the same NFC tag again after exiting.
8. Wait for the next prompt.

The app sets that room's action signal to `1` between the two taps and `0` otherwise.

## Reporting Mistakes

Use **Report Mistake** if any of these happen:

- You enter the wrong room.
- You scan or tap the wrong tag.
- You forget to scan or tap before entering.
- You forget to scan or tap after exiting.
- A QR scan fails.
- An NFC tap fails.
- You enter too early.
- You exit late.

The app logs the mistake and restarts the affected step.

## Privacy and Safety

The app records action timestamps and Wi-Fi metadata. The app should not record audio or video unless explicitly stated. Public materials should not include real addresses, participant names, real MAC addresses, or sensitive layouts.
