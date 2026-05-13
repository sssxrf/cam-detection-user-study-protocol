# App Recording Spec

This page summarizes what the study app records automatically during a detection session.

## Start Trigger

After room setup is complete, the user taps **Start Detection**. This single action starts the guided detection session and starts network capture through the connected sniffer. The user does not separately operate the sniffer.

## Recorded Data

| Category | Fields |
| --- | --- |
| Session metadata | Random participant ID, random home/session ID, run ID, method condition, app version, session start time, session end time |
| Room setup | Room number, room name, QR/NFC tag ID when applicable, confirmation status |
| Action events | Event type, room ID, action start time, action end time, action duration, idle duration, retry count, mistake reported |
| QR/NFC events | Tag ID, scan/tap timestamp, expected room, scanned/tapped room, success/failure, retry count |
| AR + button events | Button timestamps, tracking state, room entry estimate if available, room exit estimate if available, tracking failure events |
| Wi-Fi metadata | Capture start/end time, pseudonymized device ID, packet timestamp, packet size, frame type if available, RSSI if available, channel if available |

## What Is Not Needed

- Participant names.
- Exact home addresses.
- Real MAC addresses in public outputs.
- Camera serial numbers.
- Audio or video unless explicitly stated and agreed to.
- Sensitive room layouts in public materials.

## App Responsibilities

- Start network capture when the user taps **Start Detection**.
- Stop capture when the guided session ends.
- Keep only one room action active at a time.
- Reject mismatched QR/NFC tags.
- Store mistake reports instead of erasing them.
- Use pseudonymized identifiers before analysis or public sharing.
