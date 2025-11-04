# FoodDelivery App

A modern React Native food delivery application built with TypeScript, featuring user authentication, intuitive navigation, and a seamless ordering experience.

## Features

- **User Authentication**: Secure login and signup functionality.
- **Home Screen**: Displays delivery time, location selection, and quick access to favorites and profile.
- **Store Browsing**: Explore available stores and products.
- **Navigation**: Tab-based navigation for Home and Store, with stack navigation for detailed views.
- **Responsive Design**: Styled with NativeWind (Tailwind CSS for React Native) for a consistent UI across devices.
- **Logging Utility**: Built-in logger for debugging and monitoring.

## Tech Stack

- **React Native**: Cross-platform mobile app framework.
- **TypeScript**: For type-safe development.
- **React Navigation**: Handles app navigation with stacks and tabs.
- **NativeWind**: Utility-first CSS framework for styling.
- **Tailwind CSS**: Integrated for responsive design.
- **Other Libraries**: Includes vector icons, safe area context, screens, and reanimated for smooth animations.

## Prerequisites

- Node.js (>=18)
- npm or Yarn
- React Native development environment set up (see [React Native Docs](https://reactnative.dev/docs/set-up-your-environment))

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd FoodDelivery
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. For iOS (macOS only), install CocoaPods:
   ```sh
   bundle install
   bundle exec pod install
   ```

## Running the App

### Start Metro Server
```sh
npm start
# or
yarn start
```

### Run on Android
```sh
npm run android
# or
yarn android
```

### Run on iOS
```sh
npm run ios
# or
yarn ios
```

## Project Structure

```
FoodDelivery/
├── android/                 # Android-specific files
├── ios/                     # iOS-specific files
├── src/
│   ├── api/                 # API-related code
│   ├── components/          # Reusable components (e.g., Header)
│   ├── constants/           # App constants
│   ├── navigation/          # Navigation setup
│   │   ├── Routes.ts        # Route definitions
│   │   ├── Navigation.ts    # Navigation utilities
│   │   └── navigators/      # Navigator components
│   ├── screens/             # Screen components (Home, Login, Store, etc.)
│   ├── store/               # State management
│   └── utils/               # Utilities (e.g., Logger)
├── App.tsx                  # Main app component
├── index.js                 # Entry point
└── package.json             # Dependencies and scripts
```

## Scripts

- `npm start` / `yarn start`: Start the Metro server.
- `npm run android` / `yarn android`: Run on Android emulator/device.
- `npm run ios` / `yarn ios`: Run on iOS simulator/device.
- `npm run lint` / `yarn lint`: Run ESLint for code quality.
- `npm test` / `yarn test`: Run Jest tests.

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit changes: `git commit -m 'Add your feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

For issues or questions, please open an issue on GitHub or contact the development team.
