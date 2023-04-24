# Fingerprint Pro/Honeybadger.io Integration Issue

This project replicates an issue found when Honeybadger.io is integrated with Fingerprint Pro in a Vue.js 3 project.

## Resources

- [Fingerprint Pro](https://fingerprint.com/)
- [Honeybadger.io](https://honeybadger.io/)

## Steps to reproduce

1. Clone this repository
2. Run `npm install`
3. Create a `.env` file with the following contents:

    ```shell
    VITE_HONEYBADGER_API_KEY=<Honeybadger API Key>
    VITE_FINGERPRINT_TOKEN=<Fingerprint Token>
    VITE_FINGERPRINT_ENDPOINT=<Fingerprint Endpoint>
    VITE_FINGERPRINT_SCRIPT_URL_PATTERN=<Fingerprint Script URL Pattern>
    VITE_ENABLE_HONEYBADGER=<true|false>
    ```

4. Run `npm run dev`

## Expected behavior

With `VITE_ENABLE_HONEYBADGER` set to `true`, the application should run without any errors and a fingerprint should be retrieved from Fingerprint Pro.

## Actual behavior

With `VITE_ENABLE_HONEYBADGER` set to `true`, the application fails to retrieve a fingerprint from Fingerprint Pro with the following error:

```
FPJSAgentError: Error: Network connection error
```

## Example Deployments

- https://fingerprint-honeybadger.verifiedit.dev/
   - `VITE_ENABLE_HONEYBADGER` set to `true`
- https://fingerprint-only.verifiedit.dev/
   - `VITE_ENABLE_HONEYBADGER` set to `false`