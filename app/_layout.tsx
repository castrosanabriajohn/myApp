import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="censos" options={{ title: 'Censos' }} />
      <Tabs.Screen name="miEquipo" options={{ title: 'MiEquipo' }} />
      <Tabs.Screen name="pln" options={{ title: 'PLN' }} />
      <Tabs.Screen name="social" options={{ title: 'Social' }} />
      <Tabs.Screen name="perfil" options={{ title: 'Perfil' }} />
    </Tabs>
  );
}
