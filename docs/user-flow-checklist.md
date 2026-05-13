# User Flow Checklist

Use this checklist to understand the participant-facing app flow. The connected sniffer is part of the app session and starts when the user taps **Start Detection**.

## Before Start Detection

- Open the study app.
- Choose the method: AR, QR, or NFC.
- For AR + button, confirm the room list shown from the room map.
- For QR code, place or select one QR code near each room entrance.
- For NFC tag, place or select one NFC tag near each room entrance.
- Register each QR/NFC tag by scanning or tapping it.
- Name each room.
- Confirm the room-to-tag mapping.
- Review the complete room table.

## Start Detection

- Tap **Start Detection** after room setup is complete.
- The app starts the guided detection session.
- The app starts network capture through the connected sniffer.
- The user does not separately operate the sniffer.

## During Room Actions

- Follow the room prompt shown in the app.
- Keep only one room action active at a time.
- For AR + button, tap **Start Action**, enter, walk naturally, exit, and tap **Action Finished**.
- For QR code, scan the room QR code before entering and scan the same QR code after exiting.
- For NFC tag, tap the room NFC tag before entering and tap the same NFC tag after exiting.
- Wait during idle periods until the app gives the next prompt.

## If Something Goes Wrong

- Press **Report Mistake** if you enter the wrong room.
- Press **Report Mistake** if you scan or tap the wrong tag.
- Press **Report Mistake** if you forget a scan or tap.
- Press **Report Mistake** if a QR scan or NFC tap fails.
- Let the app restart the affected step.

## Ending the Session

- Follow the app's stop-session prompt.
- The app ends guided room actions and stops the connected network capture.
- The session stores action timestamps, room mappings, mistake reports, and Wi-Fi metadata using study identifiers.
