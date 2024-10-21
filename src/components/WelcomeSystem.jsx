import React, { useState } from 'react';
import {
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Switch,
  Button,
  Box,
  HStack,
  useToast,
} from '@chakra-ui/react';

function WelcomeSystem() {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [useEmbed, setUseEmbed] = useState(false);
  const [embedColor, setEmbedColor] = useState('#000000');
  const [useButton, setUseButton] = useState(false);
  const [buttonText, setButtonText] = useState('');
  const [buttonUrl, setButtonUrl] = useState('');
  const [useMenu, setUseMenu] = useState(false);
  const [menuOptions, setMenuOptions] = useState('');
  const toast = useToast();

  const handleSave = () => {
    // Aquí iría la lógica para guardar la configuración
    console.log('Configuración guardada:', {
      welcomeMessage,
      useEmbed,
      embedColor,
      useButton,
      buttonText,
      buttonUrl,
      useMenu,
      menuOptions,
    });
    toast({
      title: "Configuración guardada",
      description: "La configuración del sistema de bienvenidas ha sido guardada exitosamente.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={6} align="stretch" width="100%" maxWidth="600px" margin="auto">
      <Heading size="lg">Sistema de Bienvenidas</Heading>
      
      <FormControl>
        <FormLabel>Mensaje de Bienvenida</FormLabel>
        <Textarea
          value={welcomeMessage}
          onChange={(e) => setWelcomeMessage(e.target.value)}
          placeholder="Escribe tu mensaje de bienvenida aquí"
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
          Agregar Botón
        </FormLabel>
        <Switch
          id="use-button"
          isChecked={useButton}
          onChange={(e) => setUseButton(e.target.checked)}
        />
      </FormControl>

      {useButton && (
        <HStack>
          <FormControl>
            <FormLabel>Texto del Botón</FormLabel>
            <Input
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
              placeholder="Texto del botón"
            />
          </FormControl>
          <FormControl>
            <FormLabel>URL del Botón</FormLabel>
            <Input
              value={buttonUrl}
              onChange={(e) => setButtonUrl(e.target.value)}
              placeholder="https://ejemplo.com"
            />
          </FormControl>
        </HStack>
      )}

      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="use-menu" mb="0">
          Agregar Menú
        </FormLabel>
        <Switch
          id="use-menu"
          isChecked={useMenu}
          onChange={(e) => setUseMenu(e.target.checked)}
        />
      </FormControl>

      {useMenu && (
        <FormControl>
          <FormLabel>Opciones del Menú (una por línea)</FormLabel>
          <Textarea
            value={menuOptions}
            onChange={(e) => setMenuOptions(e.target.value)}
            placeholder="Opción 1&#10;Opción 2&#10;Opción 3"
          />
        </FormControl>
      )}

      <Button colorScheme="blue" onClick={handleSave}>
        Guardar Configuración
      </Button>
    </VStack>
  );
}

export default WelcomeSystem;