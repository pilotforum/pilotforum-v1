import React, { useState, useEffect } from 'react';
import { withRouter } from 'next/router';

import api from '~/services/api';

import Question from '~/components/Question';
import { DefaultLayout } from '~/components/Layout';

function Search({ router: { query } }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadQuestions() {
      const { data } = await api.get(`/search?title=${query.title}`);
      setQuestions(data);
      setLoading(false);
    }

    loadQuestions();
  }, []);

  return (
    <DefaultLayout>
      <h1>Busca por: {query.title}</h1>

      {loading ?
        <p>Procurando perguntas...</p>
        :
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
      }
      {!loading && questions.length === 0 && (
        <p>Não foram encontradas perguntas sobre: {query.title}...</p>
      )}
    </DefaultLayout>
  );
}

export default withRouter(Search);
