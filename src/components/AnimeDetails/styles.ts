import { LinearGradient } from "expo-linear-gradient";
import { H1, Image, Paragraph, styled, View } from "tamagui";
import { Container } from "../Container";

export const AnimeDetailsContainer = styled(Container, {});
export const AnimeBannerContainer = styled(LinearGradient, {});
export const AnimeBanner = styled(Image, {
  width: "100%",
  height: 600,
  objectFit: "cover",
  zIndex: -1,
});
export const AnimeInfosContainer = styled(View, {
  padding: 15,
  paddingHorizontal: 20,
  marginTop: -35,
});
export const AnimeTitle = styled(H1, {
  fontFamily: "$heading",
  fontWeight: 600,
  fontSize: 24,
  color: "$textColor",
  marginBottom: 5,
});
export const AnimeInfosWrapper = styled(View, {
  flexDirection: "row",
});
export const AnimeInfos = styled(Paragraph, {
  fontFamily: "$body",
  fontWeight: 300,
  fontSize: 12,
  color: "$grey",
});

export const AnimeSynopsisContainer = styled(View, {
  marginTop: 20,
  position: "relative",
});

export const AnimeSynopsisFade = styled(LinearGradient, {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
});
