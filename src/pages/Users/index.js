import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Alert} from 'react-native';

import {
  Container,
  Title,
  BtnAction,
  TxtAction,
  List,
  Table,
  Thead,
  Row,
  Item,
  Clear,
} from './styles';

import UserController from '../../controllers/UserController';

export default function User({navigation}) {
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false);

  function handleClearAll() {
    Alert.alert(
      'Alerta',
      'Deseja realmente excluir todos os usuários?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => {
            UserController.clear();
            setReload(true);
          },
        },
      ],
      {cancelable: false},
    );
  }

  useEffect(() => {
    setUsers(UserController.index());
  }, [reload]);

  return (
    <Container>
      <Title>Página Inicial</Title>
      <TouchableOpacity onPress={handleClearAll}>
        <Clear>C</Clear>
      </TouchableOpacity>
      <Row>
        <Thead>Nome</Thead>
        <Thead>E-mail</Thead>
      </Row>
      <List
        data={users}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Table>
            <Row>
              <Item>{item.name}</Item>
              <Item>{item.email}</Item>
            </Row>
          </Table>
        )}
      />
      <BtnAction onPress={() => navigation.navigate('AddUser')}>
        <TxtAction>Novo</TxtAction>
      </BtnAction>
    </Container>
  );
}
