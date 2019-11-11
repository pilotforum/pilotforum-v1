import React, { useState, useEffect } from 'react';
import api from '~/services/api';
import Link from 'next/link';

import { DefaultLayout } from '~/components/Layout';
import normalizeTag from '~/utils/normalizeTag';
import Box from '~/components/Box';

export default function Tags() {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getTags() {
      const { data } = await api.get('/tags');
      setTags(data);
      setLoading(false);
    }

    getTags();
  }, []);

  return (
    <DefaultLayout>
      <h1>Tags</h1>
      {loading
        ? <p>Carregando...</p>
        : tags.map((tag) => (
          <Link key={tag.id} href={`tag/${normalizeTag(tag.name)}`}>
            <a style={{ width: '100%' }}>
              <Box name={tag.name} />
            </a>
          </Link>
        ))}
    </DefaultLayout>
  );
}
