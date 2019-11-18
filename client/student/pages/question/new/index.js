import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { DefaultLayout } from '~/components/Layout';
import AsyncSelect from '~/components/AsyncSelect';
import { Form, Input } from '~/styles/pages/question';
import useCKEditor from '~/hooks/useCKEditor';
import api from '~/services/api';
import withAuth from '~/hoc/withAuth';

function NewQuestion() {
  const { isEditorLoaded, CKEditor, ClassicEditor } = useCKEditor();
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(false);
  const courseId = useSelector(state => state.user.profile.courseId);

  useEffect(() => {
    async function loadSubjects() {
      const { data } = api.get(`/subjects/course/${courseId}`);
      if (!data) return;

      const auxData = data.map(item => ({
        label: item.name,
        value: item.id
      }));
      console.log(auxData);
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

  return (
    <DefaultLayout withoutAside>
      <h1>Nova pergunta</h1>
      <Form>
        <Input
          type="text"
          placeholder="Digite o título da sua pergunta"
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
        />
        {isEditorLoaded ? (
          <CKEditor
            editor={ClassicEditor}
            style={{ marginTop: '1.25rem' }}
            onInit={editor => {
              console.log('Editor is ready to use!', editor)
            }}
            onChange={(event, editor) => {
              const data = editor.getData()
              console.log({ event, editor, data })
            }}
          />
        ) : (
            <div>Editor loading</div>
          )}
      </Form>
    </DefaultLayout>
  );
}

export default withAuth(NewQuestion);
