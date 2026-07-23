import LottieView from "lottie-react-native";
import React from "react";
import { LoadingContainer } from "./styles";

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <LottieView
        source={require("@/assets/animations/loading.json")}
        style={{ width: 200, height: 200 }}
        autoPlay
        loop
      />
    </LoadingContainer>
  );
};

export default Loading;
