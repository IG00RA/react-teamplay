import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

export const TodoItem = ({
  item: { id = 'id-1', name = 'todo-1', isChecked = false, category = 'car' },
  onDelete,
}) => {
  return (
    <Card
      //   direction={{ base: 'row', sm: 'row' }}
      overflow="hidden"
      variant="outline"
    >
      <Stack
        style={{
          border: '1px solid black',
          display: 'flex',
        }}
      >
        <CardBody>
          <Heading size="md">{name}</Heading>
          <Text py="2">{category}</Text>
        </CardBody>

        <CardFooter>
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => onDelete(id)}
          >
            Delete
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
