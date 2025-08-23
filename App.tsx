// The Expo Router automatically registers all routes from the `app` directory.
// Using the built-in `expo-router/entry` removes the need for `require.context`,
// which isn't available in the Metro bundler used by Expo.
// Exporting the default entry resolves runtime errors where `require.context`
// is undefined.
export { default } from 'expo-router/entry';
