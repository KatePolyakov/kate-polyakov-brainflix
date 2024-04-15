import React, { useEffect } from 'react';

export const NotFoundPage = () => {
  const PageTitle = () => {
    useEffect(() => {
      document.title = 'Not Found Page';
    }, []);
  };

  PageTitle();
  return (
    <>
      <h1>404</h1>
      <p>Can't find what you're looking for, sorry!</p>
    </>
  );
};
