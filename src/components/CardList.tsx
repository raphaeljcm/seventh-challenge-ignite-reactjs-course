import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [selectedUrlImage, setSelectedUrlImage] = useState('');

  // FUNCTION HANDLE VIEW IMAGE
  const handleViewImage = useCallback(
    (imgUrl: string) => {
      setSelectedUrlImage(imgUrl);
      onOpen();
    },
    [onOpen]
  );

  return (
    <>
      <SimpleGrid columns={3} spacing="40px">
        {cards.map(card => (
          <Card key={card.id} data={card} viewImage={handleViewImage} />
        ))}
      </SimpleGrid>

      <ModalViewImage
        isOpen={isOpen}
        onClose={onClose}
        imgUrl={selectedUrlImage}
      />
    </>
  );
}
