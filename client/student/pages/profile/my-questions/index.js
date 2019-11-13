import React, { useState, useEffect } from 'react';
import api from '~/services/api';
import { DefaultLayout } from '~/components/Layout';
import Question from '~/components/Question';

export default function MyQuestions() {

  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadQuestions() {
      const { data } = await api.get('/question-student')

      setQuestions(data)
      setLoading(false);
    }

    loadQuestions();
  }, [])
  return (
    <DefaultLayout>
      <h1>Minhas perguntas</h1>

      {loading ? (
        <p>Carregando...</p>
      ) : (
          questions.map((question) => (
            <Question
              title={question.title}
              tags={question.tags}
              votes={question.score}
              answers={question.answers.length} />
          ))
        )}
    </DefaultLayout>
  );
}
