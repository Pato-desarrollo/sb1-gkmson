import React from 'react';
import { Button, VStack, Heading, Text, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aquí iría la lógica para iniciar sesión con Discord
    console.log('Iniciando sesión con Discord');
    // Por ahora, simplemente navegamos al dashboard
    navigate('/dashboard');
  };

  return (
    <VStack spacing={8} align="center" justify="center" height="100vh" bg="gray.800" color="white">
      <Image src="https://discord.com/assets/41484d92c876f76b20c7f746221e8151.svg" alt="Discord Logo" boxSize="100px" />
      <Heading>Crea tu Bot de Discord</Heading>
      <Text>Inicia sesión con Discord para comenzar a crear tu bot sin necesidad de programar.</Text>
      <Button
        leftIcon={<Image src="https://discord.com/assets/41484d92c876f76b20c7f746221e8151.svg" alt="Discord Logo" boxSize="20px" />}
        colorScheme="purple"
        onClick={handleLogin}
      >
        Iniciar sesión con Discord
      </Button>
    </VStack>
  );
}

export default Login;