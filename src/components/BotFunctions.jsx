import React, { useState } from 'react';
import { VStack, Heading, Button, SimpleGrid, Box } from '@chakra-ui/react';
import WelcomeSystem from './WelcomeSystem';
import VerificationSystem from './VerificationSystem';

const functions = [
  { name: 'Sistema de bienvenidas', component: WelcomeSystem },
  { name: 'Sistema de verificación', component: VerificationSystem },
  { name: 'Sistema de user info', component: null },
  { name: 'Sistema de tickets', component: null },
  { name: 'Sistema de gestión de ventas', component: null },
  { name: 'Sistema de moderación', component: null },
  { name: 'Sistema de kick', component: null },
  { name: 'Sistema de bans', component: null }
];

function BotFunctions() {
  const [selectedFunction, setSelectedFunction] = useState(null);

  const handleFunctionSelect = (func) => {
    setSelectedFunction(func);
  };

  const renderSelectedFunction = () => {
    const Component = selectedFunction?.component;
    return Component ? <Component /> : <Box>Función no implementada aún</Box>;
  };

  return (
    <VStack spacing={8} align="stretch" width="100%" bg="white" p={6} borderRadius="md" boxShadow="md">
      <Heading size="md">Funciones del Bot</Heading>
      {selectedFunction ? (
        <>
          <Button onClick={() => setSelectedFunction(null)}>Volver a la lista de funciones</Button>
          {renderSelectedFunction()}
        </>
      ) : (
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {functions.map((func, index) => (
            <Button
              key={index}
              colorScheme="teal"
              onClick={() => handleFunctionSelect(func)}
              isDisabled={!func.component}
            >
              {func.name}
            </Button>
          ))}
        </SimpleGrid>
      )}
    </VStack>
  );
}

export default BotFunctions;