import React, { useState } from 'react';
import Select from 'react-select';

import { DefaultLayout } from '~/components/Layout';
import { Form, Input } from '~/styles/pages/question';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function NewQuestion() {
  const [selectedOption, setSelectedOption] = useState(false);

  function handleChange(selectedOption) {
    setSelectedOption(selectedOption);
  };

  return (
    <DefaultLayout withoutAside>
      <h1>Nova pergunta</h1>
      <Form>
        <Select
          placeholder="Selecione ou digite o nome da matéria"
          value={selectedOption}
          onChange={handleChange}
          options={options}
        />
        <Input
          type="text"
          placeholder="Digite o título da sua pergunta"
        />
        <Input
          type="text"
          placeholder="Tags (separe por vírgula)"
        />
        <textarea placeholder="Digite a sua dúvida aqui. Lembre de ser o mais objetivo possível" />
      </Form>
    </DefaultLayout>
  );
}
