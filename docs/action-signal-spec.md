# Action Signal Specification

This document defines the room action signals used by the protocol.

## Signal Definition

For a home with `N` rooms, the app records `N` binary action signals:

```text
A(t) = [a_1(t), a_2(t), ..., a_N(t)]
```

For each room `R_i`:

- `a_i(t) = 1` when the user is performing the detection action in room `R_i`.
- `a_i(t) = 0` otherwise.

In normal operation, exactly one room may be active during an action interval. During idle periods, all room signals are `0`.

## Action Start and End

| Method | Start definition | End definition |
| --- | --- | --- |
| AR + button | User taps **Start Action** while the target room is assigned by app state. | User taps **Action Finished** after exiting the target room. |
| QR code | User scans the QR code mapped to the target room before entering. | User scans the same QR code after exiting. |
| NFC tag | User taps the NFC tag mapped to the target room before entering. | User taps the same NFC tag after exiting. |

## Event Log Schema

| Field | Description |
| --- | --- |
| `run_id` | Random identifier for the study run. |
| `participant_id_random` | Random participant identifier. |
| `home_id_random` | Random home identifier. |
| `method_condition` | `AR`, `QR`, or `NFC`. |
| `trial_number` | Trial index within the run. |
| `room_id` | Random or study-local room identifier. |
| `room_label` | Participant-facing label, such as Bedroom or Kitchen. |
| `event_type` | Event type, such as `action_start`, `action_end`, `mistake_reported`, `scan_failed`, or `tracking_lost`. |
| `timestamp` | App timestamp using a synchronized clock. |
| `action_start_time` | Start timestamp for completed action intervals. |
| `action_end_time` | End timestamp for completed action intervals. |
| `action_duration` | Difference between end and start time. |
| `idle_duration_before_action` | Idle time before action start. |
| `tag_id` | Pseudonymous QR or NFC tag identifier, if applicable. |
| `expected_room_id` | Room requested by the app. |
| `observed_room_id` | Room inferred from scan, tap, or AR state. |
| `method_success` | Whether the event completed successfully. |
| `retry_count` | Number of retries for the current step. |
| `error_reported` | Whether the participant reported a mistake. |

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
- If the app asks for Bedroom but the user scans Kitchen, the app should show an error and restart that action step.
- If an action is active for Bedroom and the user scans a different room, the app should reject it or ask the user to report a mistake.
- Mistakes should be logged, not erased.
- Action intervals with missing start or end events should be marked invalid until corrected or excluded.
- Network logs should use pseudonymized MAC addresses and should not include exact home addresses or real participant identities.
