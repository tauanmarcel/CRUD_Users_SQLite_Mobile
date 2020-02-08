import styled from 'styled-components/native';
import {FlatList, TouchableOpacity} from 'react-native';

export const Container = styled.View`
  padding: 10%;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin: 20px 0;
  color: #6b52ae;
`;

export const Txt = styled.Text`
  font-size: 20px;
  color: #6b52ae;
`;

export const List = styled(FlatList)`
  min-height: 20px;
`;

export const Table = styled.View``;

export const Thead = styled.Text`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex: 1;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  border: solid 0;
  border-bottom-width: 1px;
`;

export const Item = styled.Text`
  font-size: 14px;
`;

export const BtnAction = styled(TouchableOpacity)`
  background: #6b52ae;
  height: 70px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const TxtAction = styled.Text`
  color: #fff;
  font-size: 25px;
`;

export const Form = styled.KeyboardAvoidingView.attrs({
  enable: true,
  behavior: 'padding',
})``;

export const TxtInput = styled.TextInput`
  border: solid 1px #ccc;
  border-radius: 4px;
  height: 50px;
  margin-top: 0px;
  padding-left: 10px;
`;

export const Label = styled.TextInput`
  font-size: 14px;
  margin-bottom: -10px;
  color: #6b52ae;
`;

export const Clear = styled.Text`
  color: #fff;
  background: #c70000;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  align-self: flex-end;
`;

export const GoBack = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 15px;
`;
