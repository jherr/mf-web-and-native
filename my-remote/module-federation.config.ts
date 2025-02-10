export const mfConfig = {
  name: "my_remote",
  filename: "remoteEntry.js",
  exposes: {
    "./store": "./src/store",
  },
  shared: ["react", "react-dom", "zustand"],
};
