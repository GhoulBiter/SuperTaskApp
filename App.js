import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@shopify/restyle';
import theme from './src/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/pages/Welcome';
import TaskPage from './src/pages/TaskPage';
import EditPage from './src/pages/EditPage';

const Stack = createStackNavigator();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
              name="Welcome"
              component={Welcome}
            />
            <Stack.Screen
              name="TaskPage"
              component={TaskPage}
              options={{ title: 'Tasks' }}
            />
            <Stack.Screen
              name="EditPage"
              component={EditPage}
              options={{ title: 'Edit Task' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App;
