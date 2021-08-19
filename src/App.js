/** @format */

import React from 'react';
import { useSelector } from 'react-redux';

import styles from './App.module.scss';

export const App = () => {
  const store = useSelector((state) => state);
  console.log('store', store);
  return (
    <div className={styles.wrapper}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim illo iste quam reprehenderit sapiente sit
        sunt. Aliquid amet aspernatur autem consequatur corporis, deserunt distinctio eos fuga fugit harum illo in
        laborum mollitia nemo nihil obcaecati officiis pariatur praesentium quaerat quam quas quibusdam quisquam quo
        quod rem repellendus totam! Aliquam aliquid, delectus deserunt ex fuga hic minima perspiciatis qui quibusdam
        quisquam quod recusandae repellendus tenetur totam vero! Ab, ad deserunt dicta dolore doloremque eaque fugit
        illo laboriosam modi nam perferendis placeat quam quisquam recusandae reiciendis sed sunt suscipit tempore vel
        velit? Aspernatur commodi explicabo, illum laudantium nam odit omnis perspiciatis.
      </p>
    </div>
  );
};
