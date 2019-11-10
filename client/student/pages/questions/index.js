import React, { useState, useEffect } from 'react';
import api from '~/services/api';
import { DefaultLayout } from '~/components/Layout';
import Box from '~/components/Box';

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getQuestions() {
      const { data } = await api.get('/questions');
      setQuestions(data);
      setLoading(false);
      console.log(data);
    }

    getQuestions();
  }, []);

  return (
    <DefaultLayout>
      <h1>Minhas perguntas</h1>
      {loading
        ? 'carregando...'
        : disciplines.map((questions) => (
            <Box key={questions.id} name={questions.title} />
          ))}
    </DefaultLayout>
  );
}
