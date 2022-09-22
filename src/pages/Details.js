import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import input from '../API/api';

function Details() {
  const artWorkList = useSelector((state) => state.artWorkReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(input());
  }, [dispatch]);

  let image;
  let id;
  let title;
  let alttext;

  artWorkList.map((cases) => {
    if (cases.id === window.location.pathname.slice(1)) {
      image = cases.image;
      id = cases.id;
      title = cases.title;
      alttext = cases.alt_text;
    }
    return artWorkList;
  });

  return (
    <div>
      Details
      <div>
        <detNav title={title} />
      </div>
      <section>
        <div>
          <img src={image} alt="" />
          <h1>
            {title}
          </h1>
        </div>
        <ul className="details">
          <li>
            <h2>
              Art Work Title
            </h2>
            <p>
              {title}
            </p>
          </li>
          <li>
            <h2>
              Art Work Description
            </h2>
            <p>{alttext}</p>
          </li>
          <li>
            <h2>
              Art Work ID
            </h2>
            <p>{id}</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Details;
