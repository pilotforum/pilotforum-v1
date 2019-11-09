import React, { useState, useEffect } from 'react';
import api from '~/services/api';

import { DefaultLayout } from '~/components/Layout';
import Box from '~/components/Box';

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCourses() {
      const { data } = await api.get('/courses');
      setCourses(data);
      setLoading(false);
      console.log(data);
    }

    getCourses();
  }, []);

  return (
    <DefaultLayout>
      <h1>Courses</h1>
      {loading
        ? 'carregando...'
        : courses.map((course) => <Box key={course.id} title={course.name} />)}
    </DefaultLayout>
  );
}
