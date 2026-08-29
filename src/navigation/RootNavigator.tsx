import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SystemScreen from '../screens/SystemScreen';
import LibraryScreen from '../screens/LibraryScreen';
import TextIndexScreen from '../screens/TextIndexScreen';
import VerseDetailScreen from '../screens/VerseDetailScreen';
import ConceptsScreen from '../screens/ConceptsScreen';
import ThreadScreen from '../screens/ThreadScreen';
import GraphScreen from '../screens/GraphScreen';
import { useTheme } from '../theme/useTheme';

import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="System" component={SystemScreen} />
      <Stack.Screen name="TextIndex" component={TextIndexScreen} />
      <Stack.Screen name="VerseDetail" component={VerseDetailScreen} />
      <Stack.Screen name="Thread" component={ThreadScreen} />
    </Stack.Navigator>
  );
}

function LibraryStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LibraryMain" component={LibraryScreen} />
      <Stack.Screen name="TextIndex" component={TextIndexScreen} />
      <Stack.Screen name="VerseDetail" component={VerseDetailScreen} />
      <Stack.Screen name="Thread" component={ThreadScreen} />
    </Stack.Navigator>
  );
}

function ConceptsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ConceptsMain" component={ConceptsScreen} />
      <Stack.Screen name="VerseDetail" component={VerseDetailScreen} />
      <Stack.Screen name="Thread" component={ThreadScreen} />
    </Stack.Navigator>
  );
}

function GraphStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GraphMain" component={GraphScreen} />
      <Stack.Screen name="VerseDetail" component={VerseDetailScreen} />
      <Stack.Screen name="System" component={SystemScreen} />
      <Stack.Screen name="ConceptsMain" component={ConceptsScreen} />
    </Stack.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SearchMain" component={SearchScreen} />
      <Stack.Screen name="VerseDetail" component={VerseDetailScreen} />
      <Stack.Screen name="ConceptsMain" component={ConceptsScreen} />
    </Stack.Navigator>
  );
}

const navTheme = (colors: ReturnType<typeof useTheme>['colors']) => ({
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: colors.avyakta, card: colors.avyakta, border: colors.hair },
});

const icons: Record<string, string> = { Home: '⌂', Library: '☰', Concepts: '◈', Graph: '⎈', Search: '⚲' };

export default function RootNavigator() {
  const { colors } = useTheme();
  return (
    <NavigationContainer theme={navTheme(colors)}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: colors.avyakta, borderTopColor: colors.hair },
          tabBarActiveTintColor: colors.sattva,
          tabBarInactiveTintColor: colors.tamas,
          tabBarLabelStyle: { fontSize: 10, fontWeight: '600' },
          tabBarIcon: () => <Text style={{ fontSize: 16, color: colors.sattva }}>{icons[route.name]}</Text>,
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Library" component={LibraryStack} />
        <Tab.Screen name="Concepts" component={ConceptsStack} />
        <Tab.Screen name="Graph" component={GraphStack} />
        <Tab.Screen name="Search" component={SearchStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
