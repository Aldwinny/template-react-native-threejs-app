# Template: React Native + ThreeJS Mobile Application

This is a template for future React Native Apps that use ThreeJS for displaying 3D Objects

This is a template that uses a set of packages and a predefined directory tree for the ease of organization of source codes.

## Packages

There are multiple configuration and installed packaged which may be seen in the <code>package.json</code> and <code>babel.config.js</code>

### React Native & Expo Packages

- **react**
- **react-dom**
- **react-native**
- **expo**
- **expo-image-picker**
- **expo-sqlite** - For SQLite support
- **expo-status-bar**
- **expo-gl** - Provides a View for rendering to OpenGL ES, which is important for 2D and 3D graphics.
- **expo-three** - Provides a bridge between Three.js and ExpoGL
- **@expo/webpack-config**

### More React Native Packages

- **react-native-collapsible** - For React Native collapsible form inputs.
- **react-native-country-codes-picker** - For the selection of country codes.
- **react-native-dotenv** - (Possible Removal for EAS env) For the storage and access of dotenv variables
- **react-native-element-dropdown** - For React Native dropdown form inputs.
- **react-native-gesture-handler** - A dependency for other packages.
- **react-native-paper** - A framework that includes components compliant of Material Design.
- **react-native-reanimated** - An animation library that is also a dependency for other packages.
- **react-native-safe-area-context** - A dependency for other packages, and also a usable library for Safe Area
- **react-native-screens** - A dependency for navigation packages
- **react-native-svg** - Introduces SVG support for react native
- **react-native-vector-icons** - A useful icon library
- **react-native-web** - For running react native application on the web

### Redux & Redux Persist

- **react-redux** - Introduces Redux for React
- **redux** - Installs the Redux library
- **redux-persist** - Allows for persistence of Redux-stored data
- **@reduxjs/toolkit** - More useful redux stuff.
- **react-native-async-storage/async-storage** - A dependency for redux persist & a useful library for persisting data across multiple application restarts.

### React Navigation

- **@react-navigation/bottom-tabs**
- **@react-navigation/native**
- **@react-navigation/native-stack**

### API & Security

- **axios** - Library for sending better API calls
- **bcrypt** - Encryption, Hashing, and stuff.

### Styling

- **tailwindcss** - Introduces the library for tailwind
- **nativewind** - Converts tailwind into something that can be used by React Native.

## Directories

There is a predefined directory tree for the storage of components, services, and constants which are used throughout the application. The directories are as follows

### lib

The <code>lib</code> folder serves as the root folder for your code. This includes screens, services, constants, utilities, and more.

- **components** - Store your reusable React Native custom components here
- **screens** - Store your screens here, screens are routes for your application.
- **overlays** - Inside the screens folder is the overlays folder. This includes overlays to be used alongside screens.
- **services** - Store in here code that contacts APIs as well as your connection to a local SQLite Database.
- **api** - Inside the services folder is the api folder which includes files that would connect to outside services through API calls.
- **shared** - Store here your constants and data that you want to use throughout the application.
- **redux** - Inside the shared folder is the redux folder which includes the Redux slices and stores implemented for state management.
- **utils** - Store here utilities for formatting data, debugging, and more. This serves as a folder that typically stores convenience functions.

### assets

The <code>assets</code> folder includes all the assets used by the application. This can be freely customized based on the developer's preferences.

## Configurations

Configurations are information regarding the application including how eas configurations and other dependency configurations. See <code>.gitignore, eas.json,</code> and <code>tailwind.config.js</code>
