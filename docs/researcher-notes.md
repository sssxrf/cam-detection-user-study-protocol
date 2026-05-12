# Researcher Notes

These notes describe a recommended first pilot design for comparing AR, QR, and NFC action-signal recording methods.

## Recommended First Pilot

- Start with a small number of rooms, such as three or four.
- Use the same rooms for every method condition.
- Use the same action duration, idle duration, and number of actions per room.
- Run a short training round before recording study data.
- Ask participants to report mistakes immediately with the app's Report Mistake button.
- Review logs after each pilot run before scaling to more participants.

## Within-Subject Comparison

Use a within-subject design when feasible. Each participant completes all three method conditions:

- AR + button
- QR code
- NFC tag

This keeps home layout, participant behavior, and sniffer placement more consistent across comparisons.

## Counterbalancing Order

Use counterbalancing to reduce order effects:

| Group | Condition order |
| --- | --- |
| Group A | AR -> QR -> NFC |
| Group B | QR -> NFC -> AR |
| Group C | NFC -> AR -> QR |

## Constants Across Methods

Keep these factors constant across AR, QR, and NFC:

- Detection algorithm.
- Room order.
- Action schedule.
- Sniffer setup.
- Number of actions per room.
- Idle and cooldown timing.
- Researcher instructions.

Only vary the action-signal recording method.

## Result Disclosure

Do not reveal detection results until all conditions are complete unless the study design requires it. Early disclosure can change participant behavior and bias later conditions.

## Cautions

- Do not overclaim detection accuracy or safety.
- Treat hallway and shared-view candidates as ambiguous unless extra disambiguation actions support a clearer label.
- Keep technical logs separate from consent forms and contact information.
- Do not publish sensitive layouts, identities, device identifiers, camera serial numbers, or real MAC addresses.
