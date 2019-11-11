import React from 'react';
import Link from 'next/link';

import { DefaultLayout } from '~/components/Layout';

export default function Error() {
  return (
    <DefaultLayout>
      <h1>Ei, ocorreu um erro, a página não foi encontrada!</h1>
      <p>Se quiser voltar para a página inicial <Link href="/"><a>clique aqui!</a></Link></p>
    </DefaultLayout>
  );
}
