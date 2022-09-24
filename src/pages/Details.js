import React, { useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import input from '../API/api';

// eslint-disable-next-line
  function Details({ art }) {
  const artList = useSelector((state) => state.artReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(input());
  }, [dispatch]);

  let images;
  let id;
  let title;
  let description;

  artList.map((data) => {
    console.log(data);
    if (data.id === window.location.pathname.slice(1)) {
      console.log(data.title);

      images = data.images;
      id = data.id;
      title = data.title;
      description = data.description;
    }
    return (
      <div key={id}>
        <div>
          <detNav title={title} />
        </div>
        <section>
          <div>
            <img src={images} alt="" />
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
              <p>{description}</p>
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
  });
}

const mapStateToProps = (state) => ({
  art: state.artReducer,
});

export default connect(mapStateToProps)(Details);
