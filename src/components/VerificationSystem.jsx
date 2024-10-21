import React, { useState } from 'react';
import {
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Button,
  Select,
  useToast,
} from '@chakra-ui/react';

function VerificationSystem() {
  const [useEmbed, setUseEmbed] = useState(false);
  const [embedColor, setEmbedColor] = useState('#000000');
  const [useButton, setUseButton] = useState(true);
  const [buttonText, setButtonText] = useState('Verificar');
  const [verificationMessage, setVerificationMessage] = useState('');
  const [roleToAssign, setRoleToAssign] = useState('');
  const toast = useToast();

  const handleSave = () => {
    // Aquí iría la lógica para guardar la configuración
    console.log('Configuración guardada:', {
      useEmbed,
      embedColor,
      useButton,
      buttonText,
      verificationMessage,
      roleToAssign,
    });
    toast({
      title: "Configuración guardada",
      description: "La configuración del sistema de verificación ha sido guardada exitosamente.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={6} align="stretch" width="100%" maxWidth="600px" margin="auto">
      <Heading size="lg">Sistema de Verificación</Heading>
      
      <FormControl>
        <FormLabel>Mensaje de Verificación</FormLabel>
        <Input
          value={verificationMessage}
          onChange={(e) => setVerificationMessage(e.target.value)}
          placeholder="Escribe el mensaje de verificación aquí"
        />
      </FormControl>

      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="use-embed" mb="0">
          Usar Embed
        </FormLabel>
        <Switch
          id="use-embed"
          isChecked={useEmbed}
          onChange={(e) => setUseEmbed(e.target.checked)}
        />
      </FormControl>

      {useEmbed && (
        <FormControl>
          <FormLabel>Color del Embed</FormLabel>
          <Input
            type="color"
            value={embedColor}
            onChange={(e) => setEmbedColor(e.target.value)}
          />
        </FormControl>
      )}

      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="use-button" mb="0">
          Usar Botón
        </FormLabel>
        <Switch
          id="use-button"
          isChecked={useButton}
          onChange={(e) => setUseButton(e.target.checked)}
        />
      </FormControl>

      {useButton && (
        <FormControl>
          <FormLabel>Texto del Botón</FormLabel>
          <Input
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
            placeholder="Texto del botón"
          />
        </FormControl>
      )}

      <FormControl>
        <FormLabel>Rol a Otorgar</FormLabel>
        <Select
          placeholder="Selecciona un rol"
          value={roleToAssign}
          onChange={(e) => setRoleToAssign(e.target.value)}
        >
          <option value="verified">Verificado</option>
          <option value="member">Miembro</option>
          <option value="user">Usuario</option>
        </Select>
      </FormControl>

      <Button colorScheme="blue" onClick={handleSave}>
        Guardar Configuración
      </Button>
    </VStack>
  );
}

export default VerificationSystem;