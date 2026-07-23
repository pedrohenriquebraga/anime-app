import { ImageSliderItem } from "@coder-shubh/react-native-image-slider";
import React from "react";

import { Container, Slider } from "./styles";

interface IHomeSliderProps {
  data: ImageSliderItem[];
  onPress: (index: number) => any;
}

const HomeSlider: React.FC<IHomeSliderProps> = ({ data, onPress }) => {
  return (
    <Container>
      <Slider
        imageHeight={300}
        images={data}
        showNavigationButtons={false}
        resizeMode="cover"
        activeDotColor="#e63945"
        onImagePress={onPress}
        autoplay
        loop
      />
    </Container>
  );
};

export default HomeSlider;
