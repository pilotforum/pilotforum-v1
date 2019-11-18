import React from 'react';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export default Page => {
  const WithAuth = props => {
    const profile = useSelector(state => state.user.profile);

    if (!profile) {
      Router.back();
      toast.info('Você precisa estar logado...');
      return null;
    }

    return <Page {...props} />
  };

  return WithAuth;
};
