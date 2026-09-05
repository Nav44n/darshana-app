import React from 'react';
import { Text, View, useWindowDimensions, Pressable } from 'react-native';
import { NavigationContainer, DefaultTheme, useNavigationContainerRef } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SystemScreen from '../screens/SystemScreen';
import LibraryScreen from '../screens/LibraryScreen';
import TextIndexScreen from '../screens/TextIndexScreen';
import VerseDetailScreen from '../screens/VerseDetailScreen';
import ConceptsScreen from '../screens/ConceptsScreen';
import ConceptDetailScreen from '../screens/ConceptDetailScreen';
import ThreadScreen from '../screens/ThreadScreen';
import GraphScreen from '../screens/GraphScreen';
import SearchScreen from '../screens/SearchScreen';
import { useTheme } from '../theme/useTheme';

export type RootStackParamList = {
  Tabs: { screen?: string; params?: any } | undefined;
  System: { systemId: string };
  TextIndex: { systemId: string; textId: string };
  VerseDetail: { systemId: string; textId: string; verseId: string };
  ConceptDetail: { systemId: string; textId: string; conceptId: string };
  Thread: { systemId: string; stepId?: string; textId?: string };
  Concepts: { systemId?: string };
  ConceptsMain: { systemId?: string };
  Graph: { systemId?: string };
  Library: undefined;
  Search: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function DesktopRail({ activeTab, onSelectTab }: { activeTab: string; onSelectTab: (name: string) => void }) {
  const { colors } = useTheme();
  const icons: Record<string, string> = { Home: '🏛️', Library: '📚', Concepts: '💡', Graph: '🕸️', Search: '🔍' };
  return (
    <View style={{ width: 84, backgroundColor: colors.avyakta, borderRightWidth: 1, borderColor: colors.hair, paddingTop: 32 }}>
      {['Home', 'Library', 'Concepts', 'Graph', 'Search'].map((name) => {
        const isActive = activeTab === name;
        return (
          <Pressable
            key={name}
            onPress={() => onSelectTab(name)}
            style={({ pressed }: any) => ({
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 14,
              opacity: pressed ? 0.7 : 1,
              cursor: 'pointer' as any
            })}
          >
            <View style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: isActive ? colors.sattvaGlow : 'transparent',
              borderWidth: isActive ? 1 : 0,
              borderColor: isActive ? colors.sattva : 'transparent',
            }}>
              <Text style={{ fontSize: 20 }}>{icons[name]}</Text>
            </View>
            <Text style={{
              fontSize: 11,
              fontWeight: isActive ? '700' : '500',
              marginTop: 5,
              color: isActive ? colors.sattva : colors.inkDim
            }}>
              {name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

function TabNavigator() {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;
  const icons: Record<string, string> = { Home: '🏛️', Library: '📚', Concepts: '💡', Graph: '🕸️', Search: '🔍' };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          display: isDesktop ? 'none' : 'flex',
          backgroundColor: colors.avyakta,
          borderTopColor: colors.hair,
          height: 62,
          paddingTop: 6,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: colors.sattva,
        tabBarInactiveTintColor: colors.tamas,
        tabBarLabelStyle: { fontSize: 10, fontWeight: '600', marginTop: 2 },
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: focused ? colors.sattvaGlow : 'transparent',
            }}
          >
            <Text style={{ fontSize: 16, color: focused ? colors.sattva : colors.tamas }}>{icons[route.name]}</Text>
          </View>
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Concepts" component={ConceptsScreen} />
      <Tab.Screen name="Graph" component={GraphScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
}

const navTheme = (colors: ReturnType<typeof useTheme>['colors']) => ({
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: colors.avyakta, card: colors.avyakta, border: colors.hair },
});

export default function RootNavigator() {
  const { colors } = useTheme();
  const navigationRef = useNavigationContainerRef<RootStackParamList>();
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;
  const [activeTab, setActiveTab] = React.useState('Home');

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={navTheme(colors)}
      onStateChange={() => {
        const currentRoute = navigationRef.getCurrentRoute()?.name;
        if (currentRoute && ['Home', 'Library', 'Concepts', 'Graph', 'Search'].includes(currentRoute)) {
          setActiveTab(currentRoute);
        }
      }}
    >
      <View style={{ flex: 1, flexDirection: isDesktop ? 'row' : 'column', backgroundColor: colors.avyakta }}>
        {isDesktop && (
          <DesktopRail
            activeTab={activeTab}
            onSelectTab={(name) => {
              setActiveTab(name);
              navigationRef.navigate('Tabs', { screen: name });
            }}
          />
        )}
        <View style={{ flex: 1 }}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tabs" component={TabNavigator} />
            <Stack.Screen name="System" component={SystemScreen} />
            <Stack.Screen name="TextIndex" component={TextIndexScreen} />
            <Stack.Screen name="VerseDetail" component={VerseDetailScreen} />
            <Stack.Screen name="ConceptDetail" component={ConceptDetailScreen} />
            <Stack.Screen name="Thread" component={ThreadScreen} />
            <Stack.Screen name="Concepts" component={ConceptsScreen} />
            <Stack.Screen name="ConceptsMain" component={ConceptsScreen} />
            <Stack.Screen name="Graph" component={GraphScreen} />
            <Stack.Screen name="Library" component={LibraryScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
          </Stack.Navigator>
        </View>
      </View>
    </NavigationContainer>
  );
}
