import React from 'react';
import { Box, VStack, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';

export const Rules: React.FC = () => {
  return (
    <VStack spacing={6} align="stretch" maxW="800px" mx="auto">
      <Heading as="h1" size="xl" textAlign="center">Chess Rules</Heading>
      
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading size="md">Basic Rules</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              Chess is played on an 8x8 board with alternating light and dark squares.
              Each player starts with 16 pieces: 1 king, 1 queen, 2 rooks, 2 bishops, 2 knights, and 8 pawns.
              The goal is to checkmate your opponent's king.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading size="md">How Pieces Move</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack align="stretch" spacing={3}>
              <Text><strong>Pawn:</strong> Moves forward one square, captures diagonally. On first move, can move two squares forward.</Text>
              <Text><strong>Rook:</strong> Moves any number of squares horizontally or vertically.</Text>
              <Text><strong>Knight:</strong> Moves in an L-shape: two squares in one direction, then one square perpendicular.</Text>
              <Text><strong>Bishop:</strong> Moves any number of squares diagonally.</Text>
              <Text><strong>Queen:</strong> Moves any number of squares in any direction.</Text>
              <Text><strong>King:</strong> Moves one square in any direction.</Text>
            </VStack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading size="md">Special Moves</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack align="stretch" spacing={3}>
              <Text><strong>Castling:</strong> A special move involving the king and rook. The king moves two squares toward the rook, and the rook moves to the square the king passed over.</Text>
              <Text><strong>En Passant:</strong> A special pawn capture that can occur when a pawn moves two squares forward from its starting position.</Text>
              <Text><strong>Promotion:</strong> When a pawn reaches the opposite end of the board, it can be promoted to any other piece (usually a queen).</Text>
            </VStack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading size="md">Check and Checkmate</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack align="stretch" spacing={3}>
              <Text><strong>Check:</strong> When a king is under attack by an opponent's piece.</Text>
              <Text><strong>Checkmate:</strong> When a king is in check and there is no legal move to get out of check. This ends the game.</Text>
              <Text><strong>Stalemate:</strong> When a player has no legal moves but their king is not in check. This results in a draw.</Text>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
}; 