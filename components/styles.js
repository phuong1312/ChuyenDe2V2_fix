import styled from "styled-components";
import { Constants } from "expo-constants";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  Icon,
} from "react-native";
import { AlexBrushRegular } from "../assets/fonts/AlexBrushRegular.ttf";

//color
export const Colors = {
  primary: "#ffffff",
  secondary: "#E5E7EB",
  tertiary: "#1F2937",
  darkLight: "#1F2937",
  brand: "#a85b3c",
  light_brand: "#ce6b43",
  //green: "#10B981",
  green: "#6bad3a",
  //red: "#EF4444",
  red: "#ad3a3a",
  // blue:"#0db1f0",
  blue: "#3a78ad",
  black: "#1d3240",
  blur: "#adafb2",
  neon_blur: "#f0eeee",
};

const {
  light_brand,
  primary,
  secondary,
  tertiary,
  blue,
  darkLight,
  brand,
  green,
  red,
  black,
  blur,
} = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  background-color: ${primary};
`;
export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
  padding-top: 10px;
  justify-content: center;
`;

export const PageLogo = styled.Image`
  width: 150%;
  height: 50%;
  margin-top: -10%;
  margin-bottom: 10px;
`;

export const HomePageLogo = styled.Image`
  width: 450px;
  height: 200px;
  border-width: 2px;
  border-color: ${secondary};
  margin-bottom: 10px;
  margin-top: -20px;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50px;
`;
export const FormLog = styled.View`
  position: absolute;
  width: 105%;
  height: 60%;
  background-color: ${primary};
  top: 35%;
  padding: 30px;
  border-radius: 12px;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;
  margin-bottom: 5px;
`;

export const SubTittle = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
  color: ${tertiary};
  letter-spacing: 1px;
`;
export const StyledFormArea = styled.View`
  width: 100%;
`;

export const StyledFormHome = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
`;
export const StyledTextInput = styled.TextInput`
  background: ${secondary};
  padding: 10px;
  padding-left: 65px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-bottom: 10px;
  color: ${tertiary};
  margin-vertical: 8px;
`;
export const StyledTextInputs = styled.TextInput`
  background: ${secondary};
  padding: 10px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-bottom: 10px;
  color: ${tertiary};
  margin-vertical: 8px;
`;

export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 16px;
  text-align: left;
  font-weight: bold;
  padding-left: 5px;
`;
export const LeftIcon = styled.View`
  left: 20px;
  top: 42px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 60px;
  margin-vertical: 5px;
  margin-horizontal: 20px;
`;
export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 20px;
  font-weight: bold;
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 15px;
`;
export const StyledTouchable = styled.TouchableOpacity`
  padding: 15px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 180px;
  width: 150px;
  margin-vertical: 10px;
  margin-horizontal: 18px;
`;
export const StyledTouchableImage = styled.Image`
  position: absolute;
  height: 120px;
  width: 150px;
  z-index: 1;
  top: 0;
  border-radius: 8px;
  background-color: ${primary};
`;
export const StyledTouchableText = styled.Text`
  position: absolute;
  bottom: 0;
  color: ${primary};
  font-size: 16px;
  height: 60px;
  width: 150px;
  padding-vertical: 20px;
  font-weight: bold;
  text-align: center;
`;
export const StyledTouchableTexts = styled.Text`
  position: absolute;
  bottom: 0;
  color: black;
  font-size: 16px;
  height: 60px;
  width: 150px;
  padding-vertical: 20px;
  font-weight: bold;
  text-align: center;
`;
export const WhiteZone = styled.View`
  background-color: ${primary};
  border-radius: 10px;
  width: 90%;
  height: 50px;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;
export const WZText = styled.Text`
  padding-vertical: 15px;
  padding-horizontal: 10px;
  font-size: 18px;
  color: ${brand};
  font-weight: bold;
`;

// css DinkChoosing styles
export const StyledDrinkTouchable = styled.TouchableOpacity`
  background-color: ${primary};
  border-radius: 25px;
  width: 330px;
  height: 90px;
  margin-top: 5px;
  justify-content: center;
  margin-horizontal: 7%;
  margin-vertical: 2%;
`;

export const StyledDrinkTouchableImage = styled.Image`
  position: absolute;
  height: 80px;
  width: 70px;
  z-index: 1;
  bottom: 0;
  left: -20px;
  border-radius: 20px;
`;
export const StyledDrinkTouchableText = styled.Text`
  position: absolute;
  top: -5px;
  left: 70px;
  color: ${brand};
  font-size: 18px;
  height: 60px;
  width: 150px;
  padding-vertical: 15px;
  margin-horizontal: 5px;
  font-weight: 500;
  text-align: left;
  z-index: 1;
`;
export const StyledDrinkTouchableSmallText = styled.Text`
  position: absolute;
  top: 35px;
  left: 80px;
  color: #000000;
  font-size: 11px;
  height: 80px;
  width: 170px;
  text-align: left;
  padding-vertical: 10px;
  font-weight: bold;
  text-align: center;
`;
export const StyledDrinkTouchablePrice = styled.Text`
  position: absolute;
  top: 20px;
  left: 210px;
  color: #000000;
  font-size: 22px;
  height: 60px;
  width: 150px;
  padding-vertical: 15px;
  font-weight: bold;
  text-align: center;
`;

export const StyledDrinkTouchableBtn = styled.TouchableOpacity`
  position: absolute;
  top: 25px;
  left: 320px;
  height: 50px;
  width: 50px;
  padding-vertical: 15px;
  font-weight: bold;
  text-align: center;
  background-color: ${brand};
  border-radius: 15px;
`;

// Home Admin Style
export const StyledHomeBrownZone = styled.View`
  background-color: ${brand};
  width: 100%;
  height: 170px;
  border-bottom-left-radius: 50px;
  overflow: hidden;
`;
export const StyledHomeBrownText = styled.Text`
  padding-vertical: 30px;
  color: ${primary};
  padding-left: 20px;
  font-size: 40px;
  position: absolute;
  bottom: 0;
  font-family: "AlexBrushRegular";
`;
export const StyledHomeTab = styled.TouchableOpacity`
  background-color: ${primary};
  border-radius: 10px;
  width: 300px;
  height: 80px;
  margin-top: 5px;
  margin-vertical: 20px;
`;

export const StyledHomeTabImage = styled.Image`
  position: absolute;
  height: 80px;
  width: 80px;
  border-radius: 35px;
  margin-horizontal: 15px;
`;
export const StyledHomeTabText = styled.Text`
  position: absolute;
  color: ${brand};
  font-size: 27px;
  font-weight: 500;
  top: 25;
  left: 120;
`;
export const StyledHomeBrownImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 100px;
  position: absolute;
  right: 0;
  margin-right: 10px;
  top: 23px;
`;

//  css price and name in drink scr
export const SDTText = styled.Text`
  position: absolute;
  color: ${brand};
  font-size: 13px;
  height: 50px;
  width: 130px;
  font-weight: bold;
  text-align: left;
  left: 55px;
`;

export const SDTPrice = styled.Text`
  position: absolute;
  top: 50px;
  left: 40px;
  color: ${tertiary};
  font-size: 13px;
  height: 40px;
  width: 100px;
  font-weight: bold;
  text-align: center;
`;

// css 3 btn
export const StyledDrinkTouchableAdd = styled.TouchableOpacity`
  position: absolute;
  left: 140px;
  margin-vertical: 25px;
  width: 55px;
  height: 50px;
  font-weight: bold;
  text-align: center;
  background-color: ${blue};
  border-radius: 5px;
`;
export const StyledDrinkTouchableDelete = styled.TouchableOpacity`
  position: absolute;
  left: 200px;
  width: 55px;
  height: 50px;
  font-weight: bold;
  text-align: center;
  background-color: ${red};
  border-radius: 5px;
  margin-vertical: 25px;
`;
export const StyledDrinkTouchableEdit = styled.TouchableOpacity`
  position: absolute;
  left: 260px;
  width: 55px;
  height: 50px;
  font-weight: bold;
  text-align: center;
  background-color: ${green};
  border-radius: 5px;
  margin-vertical: 25px;
`;
export const SDTBtnText = styled.Text`
  color: ${primary};
  font-size: 15;
  text-align: center;
  padding-vertical: 15px;
  font-weight: bold;
`;

// CRUB css
export const OLPic = styled.Image`
  width: 120%;
  height: 110%;
  margin-top: -10%;
`;

export const FormUpdate = styled.View`
  position: absolute;
  width: 105%;
  height: 80%;
  background-color: ${primary};
  top: 20%;
  padding: 30px;
  border-radius: 12px;
`;
export const FormUpdates = styled.View`
  position: absolute;
  width: 105%;
  height: 65%;
  background-color: ${primary};
  top: 20%;
  padding: 30px;
  border-radius: 12px;
`;

export const FormAdd = styled.View`
  position: absolute;
  width: 105%;
  height: 100%;
  background-color: ${primary};
  top: 5%;
  padding: 20px;
  border-radius: 12px;
`;
export const UULabel = styled.Text`
  color: ${tertiary};
  font-size: 16px;
  text-align: left;
  font-weight: bold;
`;
export const UUInput = styled.TextInput`
  background: ${secondary};
  padding: 20px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-bottom: 10px;
  color: ${black};
  margin-vertical: 10px;
`;

//Test
export const TableStyled = styled.View`
  position: absolute;
  width: 107%;
  height: 95%;
  background-color: ${primary};
  top: 2%;
  border-radius: 12px;
`;
