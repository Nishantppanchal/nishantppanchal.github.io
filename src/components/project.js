import React from 'react';
import Tag from './tag';

function Project(props) {
  return (
    <>
      <h1 className='flex flex-row mt-20 space-x-2 items-end text-xl'>
        <div className='font-bold'>{props.projectName}</div>
        <div className='text-slate-500'>{`- ${props.date}`}</div>
      </h1>
      <div className='flex flex-row overflow-auto mt-1 space-x-2'>
        {props.tags.map((tag) => (
          <Tag tagText={tag} />
        ))}
      </div>
      <p className='font-thin mt-3 text-lg'>{props.shortDes}</p>
      <div className='mt-3'>
        {props.longDes}
      </div>
      <div className='mt-3'>
        <span className='font-bold'>Links: </span>
        {props.links.map(({ name, href }, i) => (
          <span>
            <a href={href}>{name}</a>
            {i < props.links.length - 1 ? ', ' : null}
          </span>
        ))}
      </div>
    </>
  );
}

export default Project;
