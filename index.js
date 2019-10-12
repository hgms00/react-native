import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

import Routes from "./android/app/src";

AppRegistry.registerComponent(appName, () => Routes);