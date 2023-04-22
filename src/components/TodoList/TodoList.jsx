import { TodoItem } from 'components/TodoItem/TodoItem';

export const TodoList = ({ items, onDelete, handleIsChecked }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <TodoItem
            item={item}
            onDelete={onDelete}
            handleIsChecked={handleIsChecked}
          />
        </li>
      ))}
    </ul>
  );
};
