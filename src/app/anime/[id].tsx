import AnimeScreen from "@/screens/Anime";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";

const Anime: React.FC = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: "Aguarde..." });
  }, [navigation]);

  return <AnimeScreen id={id.toString()} />;
};

export default Anime;
