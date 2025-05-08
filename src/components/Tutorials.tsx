import React from 'react';
import { Box, VStack, Heading, Text, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button } from '@chakra-ui/react';

export const Tutorials: React.FC = () => {
  const tutorials = [
    {
      title: "Opening Principles",
      content: "Learn the fundamental principles of chess openings: control the center, develop your pieces, and castle early.",
      level: "Beginner"
    },
    {
      title: "Basic Tactics",
      content: "Master essential tactical patterns: pins, forks, skewers, and discovered attacks.",
      level: "Beginner"
    },
    {
      title: "Endgame Basics",
      content: "Learn how to win with basic endgame positions: king and queen vs king, king and rook vs king.",
      level: "Intermediate"
    },
    {
      title: "Pawn Structure",
      content: "Understand the importance of pawn structure and how it affects your strategy.",
      level: "Intermediate"
    },
    {
      title: "Positional Play",
      content: "Learn about space advantage, piece activity, and weak squares.",
      level: "Advanced"
    },
    {
      title: "Strategic Planning",
      content: "Develop your ability to create and execute long-term plans.",
      level: "Advanced"
    }
  ];

  return (
    <VStack spacing={8} align="stretch" maxW="1200px" mx="auto">
      <Heading as="h1" size="xl" textAlign="center">Chess Tutorials</Heading>
      
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {tutorials.map((tutorial, index) => (
          <Card key={index} variant="outline">
            <CardHeader>
              <Heading size="md">{tutorial.title}</Heading>
              <Text color="gray.500" fontSize="sm">Level: {tutorial.level}</Text>
            </CardHeader>
            <CardBody>
              <Text>{tutorial.content}</Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue" size="sm">
                Start Tutorial
              </Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </VStack>
  );
}; 