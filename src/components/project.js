import React from 'react';
import Tag from './tag';

function Project({ projectName, date, tags, shortDes, longDes, links }) {
  return (
    <>
      <h1 className='flex flex-row mt-20 space-x-2 items-end text-xl'>
        <div className='font-bold'>{projectName}</div>
        <div className='text-slate-500'>{`- ${date}`}</div>
      </h1>
      <div className='flex flex-row flex-wrap mt-1 gap-x-2 gap-y-1'>
        {tags.map((tag) => (
          <Tag tagText={tag} />
        ))}
      </div>
      <p className='font-thin mt-3 text-lg'>{shortDes}</p>
      <div className='mt-3'>{longDes}</div>
      <div className='mt-3'>
        {links.length > 0 ? <span className='font-bold'>Links: </span> : null}
        {links.map(({ name, href }, i) => (
          <span>
            <a href={href}>{name}</a>
            {i < links.length - 1 ? ', ' : null}
          </span>
        ))}
      </div>
    </>
  );
}

export default Project;
