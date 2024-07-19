const config = {
  apiKey: "AIzaSyC_gORW4UoftGnhc8F0EjuRilBlpIWCB0Y",
  authDomain: "friendlyeats-1ba67.firebaseapp.com",
  projectId: "friendlyeats-1ba67",
  storageBucket: "friendlyeats-1ba67.appspot.com",
  messagingSenderId: "200174970234",
  appId: "1:200174970234:web:56768aa1e82975821862c3",
  measurementId: "G-LFWG5Y33Z0"
};

// When deployed, there are quotes that need to be stripped
Object.keys(config).forEach((key) => {
  const configValue = config[key] + "";
  if (configValue.charAt(0) === '"') {
    config[key] = configValue.substring(1, configValue.length - 1);
  }
});

export const firebaseConfig = config;
