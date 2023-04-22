import { TodoItem } from 'components/TodoItem/TodoItem';

export const TodoList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <TodoItem item={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
