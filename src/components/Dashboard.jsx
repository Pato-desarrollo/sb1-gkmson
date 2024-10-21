import React, { useState } from 'react';
import { VStack, Heading, Button, Input, Box, Text, useToast } from '@chakra-ui/react';
import BotFunctions from './BotFunctions';

function Dashboard() {
  const [token, setToken] = useState('');
  const [showFunctions, setShowFunctions] = useState(false);
  const toast = useToast();

  const handleTokenSubmit = () => {
    if (token.trim() === '') {
      toast({
        title: "Token requerido",
        description: "Por favor, ingresa el token de tu bot.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    // Aquí iría la lógica para validar el token
    console.log('Token submitted:', token);
    setShowFunctions(true);
  };

  return (
    <VStack spacing={8} align="center" p={8} minHeight="100vh" bg="gray.100">
      <Heading>Panel de Control</Heading>
      {!showFunctions ? (
        <Box bg="white" p={6} borderRadius="md" boxShadow="md">
          <Text mb={4}>Para comenzar a crear tu bot, necesitas proporcionar el token del bot. Puedes obtenerlo en la página oficial de Discord Developers.</Text>
          <Input
            placeholder="Ingresa el token de tu bot"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            mb={4}
          />
          <Button colorScheme="blue" onClick={handleTokenSubmit}>
            Comenzar a crear mi bot
          </Button>
        </Box>
      ) : (
        <BotFunctions />
      )}
    </VStack>
  );
}

export default Dashboard;