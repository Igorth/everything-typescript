// import React from 'react';

// type Props = {
//   title: string;
//   content: string;
//   commentsQty: number;
//   tags: string[];
// };

// const Destructuring = (props: Props) => {
//   return (
//     <div>
//       <h1>Destructuring</h1>
//       <p>Title: {props.title}</p>
//       <p>Content: {props.content}</p>
//       <p>CommentsQty: {props.commentsQty}</p>
//       <p>Tags: {props.tags}</p>
//     </div>
//   );
// };

// export default Destructuring;

import React from 'react';

type Props = {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];

  // ENUM
  category: Category;
};

export enum Category {
  JS = 'JavaScript',
  TS = 'TypeScript',
  PY = 'Python',
}

const Destructuring = ({
  title,
  content,
  commentsQty,
  tags,
  category,
}: Props) => {
  return (
    <div>
      <h1>Destructuring</h1>
      <p>Title: {title}</p>
      <p>Content: {content}</p>
      <p>CommentsQty: {commentsQty}</p>
      <p>
        {tags.map(tag => (
          <span>#{tag}</span>
        ))}
      </p>
      <h4>Categoria: {category}</h4>
    </div>
  );
};

export default Destructuring;
