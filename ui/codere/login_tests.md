# codere.es

Tags: @desktop, @mobile
Meta: browser = all

## Setup

- Playwright project is provided to setup browser storage so pages load without cookies panel.

## Basic cases [automated]

- [fail] Attempt to login with correct username and password combination (Note: pending to have ability to do a successful login with a registered user)
- [fail]Attempt to login with correct email and password combination (Note: pending to have ability to do a successful login with a registered user)

## Error cases [automated]
- [pass] Attempt to login with no data.
- [pass] Attempt to login with any username, and no password.
- [pass] Attempt to login with no username, and any password.
- [fail] Attempt to login with correct username but incorrect password (Note: we cannot test it without a registered user)
    * Defect: system is showing a "change your password" screen instead of showing a login error message.
- [issue] Attempt to login with correct email but incorrect password (Note: we cannot test it without having a registered user email)
- [pass] Attempt to login with non existent username (Note: We can code it, however, I don't have control over the existing users, so it may not be accurate)
- [pass] Attempt to login with non existent email  (Note: We can code it, however, I don't have control over the existing users, so it may not be accurate)

Additional notes:
- "Forgot your password" functionality is out of scope of this task.
- "User registration" functionality is out of scope of this task.
