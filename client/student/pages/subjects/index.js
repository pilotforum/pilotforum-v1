import React, { useState, useEffect } from 'react';
import api from '~/services/api';
import { DefaultLayout } from '~/components/Layout';
import Box from '~/components/Box';

export default function Disciplines() {
  const [disciplines, setDisciplines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDisciplines() {
      const { data } = await api.get('/subjects');
      setDisciplines(data);
      setLoading(false);
      console.log(data);
    }

    getDisciplines();
  }, []);

  return (
    <DefaultLayout>
      <h1>Todas as matérias</h1>
      {loading
        ? 'carregando...'
        : disciplines.map((subject) => (
            <Box key={subject.id} name={subject.name} />
          ))}
    </DefaultLayout>
  );
}
