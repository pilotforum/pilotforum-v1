import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import api from '~/services/api';
import { DefaultLayout } from '~/components/Layout';
import Question from '~/components/Question';

export default function MyQuestions() {
  const id = useSelector(state => state.user.profile.id);
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadQuestions() {
      const { data } = await api.get(`/question-student/${id}`)

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

      {!loading && questions.length === 0 && (
        <p>Você ainda não fez nenhuma pergunta...</p>
      )}
    </DefaultLayout>
  );
}
