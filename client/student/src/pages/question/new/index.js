import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';

import { DefaultLayout } from '~/components/Layout';
import AsyncSelect from '~/components/AsyncSelect';
import Button from '~/components/UI/Button';
import { Form, Input } from '~/styles/pages/question';
import useCKEditor from '~/hooks/useCKEditor';
import api from '~/services/api';
import withAuth from '~/hoc/withAuth';

function NewQuestion() {
  const { isEditorLoaded, CKEditor, ClassicEditor } = useCKEditor();
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(false);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [data, setData] = useState('');
  const courseId = useSelector(state => state.user.profile.courseId);

  useEffect(() => {
    async function loadSubjects() {
      const { data } = await api.get(`/subjects/course/${courseId}`);
      if (!data) return;

      const auxData = data.map(item => ({
        label: item.name,
        value: item.id
      }));
      setSubjects(auxData);
    }

    loadSubjects();
  }, []);

  function filterSubjects(inputValue) {
    return subjects.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  function handleSubjectsChange(option) {
    setSelectedSubject(option);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post(`/questions`, {
      title,
      content: data,
      score: 0,
      status: "ABERTA",
      subjectId: selectedSubject.value,
      tags: tags.split(',')
    });

    Router.push(`/question?id=${response.data.id}`);
  }

  return (
    <DefaultLayout withoutAside>
      <h1>Nova pergunta</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Digite o título da sua pergunta"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <AsyncSelect
          cacheOptions
          defaultOptions={subjects}
          placeholder="Selecione ou digite o nome da matéria"
          loadOptions={filterSubjects}
          options={subjects}
          value={selectedSubject}
          onChange={handleSubjectsChange}
          loadingMessage={() => "Carregando matérias"}
          noOptionsMessage={() => "Matéria não encontrada"}
        />
        <Input
          type="text"
          placeholder="Tags (separe por vírgula)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
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
          style={{ marginTop: '1.25rem', marginBottom: '2.5rem' }}
          type="submit"
          text="Salvar"
        />
      </Form>
    </DefaultLayout>
  );
}

export default withAuth(NewQuestion);
