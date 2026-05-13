# Action Signal Format

This document defines the room action signals recorded by the study app.

## Signal Definition

For a home with `N` rooms, the app records `N` binary action signals:

```text
A(t) = [a_1(t), a_2(t), ..., a_N(t)]
```

For each room `R_i`:

- `a_i(t) = 1` only while the user is performing the instructed enter-walk-exit action in room `R_i`.
- `a_i(t) = 0` otherwise.

During normal operation, only one room should have signal `1` at a time. During idle periods, all room signals are `0`.

## Start Detection

After room setup is complete, the user taps **Start Detection**. This single action starts the guided detection session and starts network capture through the connected sniffer. The user does not separately operate the sniffer.

## Action Start and End

| Method | Start definition | End definition |
| --- | --- | --- |
| AR + button | User taps **Start Action** while the target room is assigned by app state and the room map is available. | User taps **Action Finished** after exiting the target room. |
| QR code | User scans the QR code mapped to the target room before entering. | User scans the same QR code after exiting. |
| NFC tag | User taps the NFC tag mapped to the target room before entering. | User taps the same NFC tag after exiting. |

## QR/NFC Room Mapping

For QR-code and NFC-tag methods, the app does not require a geometric room map. The app already recognizes valid tag IDs, but the user creates the mapping:

```text
room name <-> QR code ID
room name <-> NFC tag ID
```

After the mapping is confirmed, the app can guide room actions by room name and tag ID.

## Example JSON Event Objects

```json
{
  "run_id": "run_024",
  "participant_id_random": "p_8f31",
  "home_id_random": "h_17b2",
  "method_condition": "QR",
  "trial_number": 3,
  "room_id": "room_01",
  "room_label": "Bedroom",
  "event_type": "action_start",
  "timestamp": "2026-05-12T19:30:10.000Z",
  "tag_id": "tag_001",
  "expected_room_id": "room_01",
  "observed_room_id": "room_01",
  "method_success": true,
  "retry_count": 0,
  "error_reported": false
}
```

```json
{
  "run_id": "run_024",
  "participant_id_random": "p_8f31",
  "home_id_random": "h_17b2",
  "method_condition": "AR",
  "trial_number": 4,
  "room_id": "room_02",
  "room_label": "Kitchen",
  "event_type": "mistake_reported",
  "timestamp": "2026-05-12T19:35:44.000Z",
  "method_success": false,
  "retry_count": 1,
  "error_reported": true
}
```

## Example CSV Action-Signal Table

```csv
time,bedroom,kitchen,living_room,office
00:00,0,0,0,0
00:10,1,0,0,0
00:24,0,0,0,0
01:00,0,1,0,0
01:16,0,0,0,0
```

## Validation Rules

- Only one room action can be active at a time.
- During idle periods, all room signals must be `0`.
- For QR/NFC, the same tag must start and end the action.
- If the app asks for Bedroom but the user scans Kitchen, the app should say: "This tag is registered to Kitchen, but the current room is Bedroom. Please scan the Bedroom tag or press Report Mistake."
- If the user forgets a scan or tap, they should press **Report Mistake**.
- If an action is active for one room, the app should not allow another room action to start.
- Mistakes should be logged, and the app should restart the affected step.
- Network metadata should use pseudonymized device identifiers before analysis or public sharing.
