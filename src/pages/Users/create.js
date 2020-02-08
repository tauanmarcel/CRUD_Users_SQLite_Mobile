import React, {useState, useRef, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';

import {
  Container,
  Title,
  Form,
  TxtInput,
  Label,
  BtnAction,
  TxtAction,
  Txt,
  GoBack,
} from './styles';

import UserController from '../../controllers/UserController';
import {Alert} from 'react-native';

export default function AddUser({navigation}) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const emaiRef = useRef();

  function handleAddUser() {
    try {
      UserController.store(name, email);
      setName('');
      setEmail('');
      Alert.alert('Sucesso', 'Usuário adicionado com sucesso');
    } catch (err) {
      console.tron.log('Erro', err);
      Alert.alert('Erro', 'Não foi possível adicionar o usuário');
    }
  }

  useEffect(() => {}, []);

  return (
    <Container>
      <Title>Novo Usuário</Title>
      <Form>
        <Label>Nome</Label>
        <TxtInput
          placeholder="João da Silva"
          autoCapitalize="words"
          autoCorrect={false}
          value={name}
          onChangeText={setName}
          returnKeyType="next"
          onSubmitEditing={() => emaiRef.current.focus()}
        />
        <Label>E-mail</Label>
        <TxtInput
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="exemple@gmail.com"
          value={email}
          onChangeText={setEmail}
          ref={emaiRef}
          returnKeyType="send"
          onSubmitEditing={handleAddUser}
        />
        <BtnAction onPress={handleAddUser}>
          <TxtAction>Salvar</TxtAction>
        </BtnAction>
      </Form>
      <TouchableOpacity onPress={() => navigation.navigate('Users')}>
        <GoBack>
          <Txt>Voltar</Txt>
        </GoBack>
      </TouchableOpacity>
    </Container>
  );
}
