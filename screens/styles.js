import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Cor de fundo leve
  },
  input: {
    alignSelf: 'center',
    width: '40%',
    marginBottom: 15,
    backgroundColor: '#fff', // Fundo branco para campos de entrada
  },
  button: {
    alignSelf: 'center',
    width: '10%',
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginTop: 20,
    borderRadius: 50, // Canto arredondado para botões
  },
  header: {
    backgroundColor: '#6200ee', // Cor de fundo da barra superior
  },
  title: {
    color: '#fff', // Cor do texto da barra superior
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  photoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50, // Foto circular
    backgroundColor: '#ddd', // Cor de fundo para área de foto
  },
});

