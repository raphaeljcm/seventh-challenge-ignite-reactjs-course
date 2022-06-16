import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        bgColor="pGray.800"
        mx="auto"
        w="auto"
        h="auto"
        maxWidth={['300px', '500px', '900px']}
        maxHeight={['350px', '450px', '600px']}
      >
        <ModalBody p={0}>
          <Image maxW={900} maxH={600} src={imgUrl} />
        </ModalBody>

        <ModalFooter
          justifyContent="flex-start"
          bgColor="pGray.800"
          borderBottomRadius="6px"
          paddingBlock="8px"
          paddingInline="10px"
        >
          <Link
            href={imgUrl}
            isExternal
            color="pGray.50"
            fontSize="sm"
            fontWeight={400}
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
