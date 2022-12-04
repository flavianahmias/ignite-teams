import { Text } from "react-native";
import { Container, LoadIndicator } from "./styles";

export function Loading() {
  return (
    <Container>
      <LoadIndicator></LoadIndicator>
    </Container>
  );
}