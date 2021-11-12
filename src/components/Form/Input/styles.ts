import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TextInput)`
  width: 100%;
  padding: ${RFValue(16)}px;
  font-size: ${RFValue(14)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_dark};
  border-radius: ${RFValue(5)}px;
  margin-bottom: ${RFValue(8)}px;
`;
