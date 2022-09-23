import React, { useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import input from '../API/api';

function Details() {
  const artWorkList = useSelector((state) => state.artWorkReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(input());
  }, [dispatch]);

  let images;
  let id;
  let title;
  let image;

  artWorkList.map((art) => {
    if (art.id === window.location.pathname.slice(1)) {
      images = art.images;
      id = art.id;
      title = art.title;
      image = art.image;
    }
    return art;
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
            <p>{image}</p>
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

const mapStateToProps = (state) => ({
  art: state.artReducer,
});
export default connect(mapStateToProps)(Details);
