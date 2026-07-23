import React from "react";
import { Switch } from "react-native";
import { useTheme } from "tamagui";
import { Container, SwitchLabel } from "./styles";

interface ISwitchInputProps {
  label: string;
  currentValue: boolean;
  onSwitch: (newValue: boolean) => any;
}

const SwitchInput: React.FC<ISwitchInputProps> = ({
  label,
  currentValue,
  onSwitch,
}) => {
  const { red } = useTheme();

  return (
    <Container>
      <SwitchLabel>{label}</SwitchLabel>
      <Switch
        trackColor={{ false: "#767577", true: red.val }}
        thumbColor={currentValue ? "#b82d36" : "#f4f3f4"}
        value={currentValue}
        onValueChange={onSwitch}
      />
    </Container>
  );
};

export default SwitchInput;
