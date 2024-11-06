import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { router } from './router';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import ImageViewer from './screens/ImageViewer';

const Stack = createNativeStackNavigator<router>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{
          headerShown:false
        }}/>
        <Stack.Screen name='Image' component={ImageViewer} options={{
          headerShown:false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
