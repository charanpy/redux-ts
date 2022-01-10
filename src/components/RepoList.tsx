import React, { useState } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepoList: React.FC = () => {
  const [term, setTerm] = useState('');
  const dispatch = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(term);
  };

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
      {data.map((res) => (
        <p key={res}>{res}</p>
      ))}
    </div>
  );
};

export default RepoList;
