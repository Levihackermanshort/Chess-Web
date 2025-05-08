import React from 'react';
import { ChakraProvider, Box, Container, Flex, Link as ChakraLink, Heading } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { ChessGame } from './components/ChessGame';
import { Tutorials } from './components/Tutorials';
import { Rules } from './components/Rules';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box minH="100vh" bg="gray.50">
          <Box as="nav" bg="white" boxShadow="sm" py={4}>
            <Container maxW="container.xl">
              <Flex justify="space-between" align="center">
                <Heading size="md" color="blue.600">Chess Web</Heading>
                <Flex gap={6}>
                  <ChakraLink as={RouterLink} to="/" 
                    _hover={{ textDecoration: 'none', color: 'blue.500' }}
                    fontWeight="medium">
                    Play Chess
                  </ChakraLink>
                  <ChakraLink as={RouterLink} to="/tutorials"
                    _hover={{ textDecoration: 'none', color: 'blue.500' }}
                    fontWeight="medium">
                    Tutorials
                  </ChakraLink>
                  <ChakraLink as={RouterLink} to="/rules"
                    _hover={{ textDecoration: 'none', color: 'blue.500' }}
                    fontWeight="medium">
                    Rules
                  </ChakraLink>
                </Flex>
              </Flex>
            </Container>
          </Box>
          
          <Container maxW="container.xl" py={8}>
            <Routes>
              <Route path="/" element={<ChessGame />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/rules" element={<Rules />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App; 