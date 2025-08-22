import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // eslint-disable-line import/no-unresolved

interface Props {
  title: string;
  style?: ViewStyle;
  onPress?: () => void;
}

export default function GradientButton({ title, style, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={["#4caf50", "#ffffff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.button, style]}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
    color: '#000',
  },
});
