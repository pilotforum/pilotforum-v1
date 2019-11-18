import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import api from '~/services/api';
import { DefaultLayout } from '~/components/Layout';
import useCKEditor from '~/hooks/useCKEditor';
import UserQuestion from '~/components/UserQuestion';
import Answer from '~/components/Answer';
import { AnswerContainer } from '~/styles/pages/question';
import Button from '~/components/UI/Button';

export default function Question() {
  const router = useRouter();
  const profile = useSelector(state => state.user.profile);
  const { isEditorLoaded, CKEditor, ClassicEditor } = useCKEditor();
  const [loading, setLoading] = useState(true);
  const [answerLoading, setAnswerLoading] = useState(false);
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState({});
  const [data, setData] = useState('');

  useEffect(() => {
    async function loadQuestion() {
      const { data } = await api.get(`/questions/${router.query.id}`);
      const auxData = { ...data };
      delete auxData.answers;

      setQuestion(auxData);
      setAnswers(data.answers);
      setLoading(false);
    }

    loadQuestion();
  }, []);

  async function closeQuestion() {
    await api.put(`/questions/${question.id}`, {
      status: 'FECHADA'
    })
    toast.success('Pergunta fechada com sucesso. Agora não receberá mais comentários.')
  }

  async function delQuestion() {
    await api.delete(`/questions/${question.id}`);
    router.push('/');
  }

  async function voteQuestion(type) {
    if (!profile) {
      toast.error('Você precisa ter uma conta para votar');
      return;
    }

    const auxQuestion = { ...question };
    if (type === 'like') {
      auxQuestion.score++;
    } else if (type === 'dislike') {
      auxQuestion.score--;
    }
    setQuestion(auxQuestion);
    await api.post(`/${type}-question/${question.id}`);
  }

  async function handleAnswerSubmit(e) {
    e.preventDefault();
    if (!profile) {
      toast.error('Você precisa ter uma conta para responder');
    }

    setAnswerLoading(true);
    const response = await api.post('/answers', {
      content: data,
      questionId: question.id
    });

    const auxAns = [...answers, response.data];
    setAnswers(auxAns);
    setAnswerLoading(false);
  }

  return (
    <DefaultLayout withoutAside>
      {loading ? <p>Carregando pergunta...</p> : (
        <>
          <UserQuestion
            userId={question.student.id}
            title={question.title}
            content={question.content}
            likes={question.score}
            date={question.createdAt}
            tags={question.tags}
            status={question.status}
            answersLength={answers.length}
            name={question.student.name}
            voteQuestion={voteQuestion}
            closeQuestion={closeQuestion}
            delQuestion={delQuestion}
          />
          {
            answers.map(item => (
              <Answer
                key={item.id}
                name={item.student.name}
                content={item.content}
                date={item.createdAt}
              />
            ))
          }
          {question.status === 'ABERTA' && (
            <AnswerContainer onSubmit={handleAnswerSubmit}>
              <h4>Responder:</h4>
              {isEditorLoaded ? (
                <CKEditor
                  editor={ClassicEditor}
                  value={data}
                  style={{ marginTop: '1.25rem' }}
                  onChange={(event, editor) => {
                    setData(editor.getData());
                  }}
                />
              ) : (
                  <div>Carregando editor</div>
                )}
              <Button
                type="submit"
                text={answerLoading ? "Enviando..." : "Responder"}
              />
            </AnswerContainer>
          )}
        </>
      )}
    </DefaultLayout>
  );
}
