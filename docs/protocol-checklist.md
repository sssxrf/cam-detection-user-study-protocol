# Researcher Checklist

Use this checklist before, during, and after each study run. Keep participant consent records separate from technical logs.

## Before Study

- Confirm room list.
- Prepare Wi-Fi sniffer.
- Prepare QR codes or NFC tags if needed.
- Verify the app contains valid QR/NFC IDs.
- Confirm consent.
- Start network capture.
- Synchronize clocks across the phone, sniffer, and analysis machine.
- Run training so the participant understands the prompts.

## During Study

- Confirm the participant follows prompts.
- Log mistakes.
- Avoid overlapping room actions.
- Monitor the sniffer.
- Record setup time and completion time.

## After Study

- Stop capture.
- Export logs.
- Pseudonymize identifiers.
- Verify action signals.
- Check for missing scans or taps.
- Compute metrics.
- Debrief the participant.

## Quick Quality Checks

- Only one room action should be active at a time.
- QR/NFC start and end events should use the same tag.
- Mistake reports should be preserved in the log.
- No exact home address, participant identity, camera serial number, or real MAC address should appear in exported public data.
