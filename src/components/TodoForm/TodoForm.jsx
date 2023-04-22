import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

export const TodoForm = ({ addTodo }) => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        name: '',
        category: '',
      }}
      onSubmit={values => {
        const newTodo = {
          ...values,
          id: nanoid(),
          isChecked: false,
        };
        addTodo(newTodo);
      }}
    >
      <Form>
        <label htmlFor="firstName">Что надо сделать</label>
        <Field id="firstName" name="name" placeholder="задача" />
        <Field as="select" name="category">
          <option value="Car">Car</option>
          <option value="Home">Home</option>
          <option value="Work">Work</option>
        </Field>

        <Button type="submit" colorScheme="teal" size="sm">
          Submit
        </Button>
      </Form>
    </Formik>
  </div>
);
