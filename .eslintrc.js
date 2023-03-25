module.exports = {
  root: false,
  extends: '@react-native-community',
  "rules": {
  },
  "overrides": [
    {
      "files": ["**/*.js?(x)"],
      "rules": {
// ******** add ignore rules here *********
        "react/no-unescaped-entities": "off",
        "react/display-name": "off",
        "react/prop-types": "off",
      }
    }
  ]};
