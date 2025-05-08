import React, { useState, useCallback } from 'react';
import { Box, VStack, Text, Button } from '@chakra-ui/react';
import { Chess } from 'chess.js';
import { Chessboard } from 'chessboardjsx';

export const ChessGame: React.FC = () => {
  const [game, setGame] = useState(new Chess());
  const [position, setPosition] = useState('start');

  const onDrop = useCallback((move: { sourceSquare: string; targetSquare: string }) => {
    try {
      const gameCopy = new Chess(game.fen());
      const result = gameCopy.move({
        from: move.sourceSquare,
        to: move.targetSquare,
        promotion: 'q', // always promote to queen for simplicity
      });

      if (result) {
        setGame(gameCopy);
        setPosition(gameCopy.fen());
      }
    } catch (error) {
      console.error('Invalid move:', error);
    }
  }, [game]);

  const resetGame = () => {
    const newGame = new Chess();
    setGame(newGame);
    setPosition('start');
  };

  return (
    <VStack spacing={4} align="center">
      <Text fontSize="2xl" fontWeight="bold">Chess Game</Text>
      <Box
        w="600px"
        h="600px"
        boxShadow="lg"
        borderRadius="md"
        overflow="hidden"
      >
        <Chessboard
          position={position}
          onPieceDrop={onDrop}
          boardWidth={600}
        />
      </Box>
      <Button colorScheme="blue" onClick={resetGame}>
        Reset Game
      </Button>
      <Text>
        {game.isCheckmate() ? 'Checkmate!' :
         game.isDraw() ? 'Draw!' :
         game.isCheck() ? 'Check!' :
         `Current turn: ${game.turn() === 'w' ? 'White' : 'Black'}`}
      </Text>
    </VStack>
  );
}; 