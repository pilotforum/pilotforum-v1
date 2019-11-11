import React from 'react';

import { DefaultLayout } from '~/components/Layout';
import Question from '~/components/Question';

export default function Home() {
  return (
    <DefaultLayout>
      <h1>Últimas perguntas</h1>
      <Question title="Socorro, quanto é 2 + 2 * 5?" tags={[{ name: 'Teste' }]} votes={2} answers={2} />
    </DefaultLayout>
  );
}
