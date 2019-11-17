import React, { useState, useEffect } from 'react';

import { DefaultLayout } from '~/components/Layout';
import Question from '~/components/Question';

import api from '~/services/api';

export default function Home() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadQuestions() {
      const { data } = await api.get('/questions');
      setQuestions(data);
      setLoading(false);
    }

    loadQuestions();
  }, []);

  return (
    <DefaultLayout>
      <h1>Últimas perguntas</h1>

      {loading ? (
        <p>Carregando...</p>
      ) : (
          questions.map((question) => (
            <Question
              title={question.title}
              tags={question.tags}
              votes={question.score}
              answers={question.answers.length}
            />
          ))
        )}

      {!loading && questions.length === 0 && (
        <p>Não há perguntas recentes...</p>
      )}
    </DefaultLayout>
  );
}
