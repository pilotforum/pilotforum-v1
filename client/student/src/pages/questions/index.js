import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import api from '~/services/api';
import { DefaultLayout } from '~/components/Layout';
import Question from '~/components/Question';

const index = {
  course: 'curso',
  subjects: 'matérias',
  tag: 'tag'
}

export default function Questions() {
  const router = useRouter();
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadQuestions() {
      const { filter, id } = router.query;

      const { data } = await api.get(`/questions/${filter}/${id}`);

      setQuestions(data)
      setLoading(false);
    }

    loadQuestions();
  }, []);

  return (
    <DefaultLayout>
      <h1>Perguntas</h1>

      {loading ? (
        <p>Carregando...</p>
      ) : (
          questions.map((question) => (
            <Question
              key={question.id}
              id={question.id}
              status={question.status}
              title={question.title}
              tags={question.tags}
              votes={question.score}
              answers={question.answers.length}
            />
          ))
        )}

      {!loading && questions.length === 0 && (
        <p>Não há perguntas desse(a) {index[router.query.filter]}...</p>
      )}
    </DefaultLayout>
  );
}
