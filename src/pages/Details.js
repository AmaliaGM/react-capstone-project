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
      <table key={id} className="table table-striped table-hover mt-5 shadow-1g">
        <div>
          <detNav title={title} />
        </div>
        <tr>
          <th>
            <img src={images} alt="" />
          </th>
          <td>
            {title}
          </td>
          <th>
            Art Work Title
          </th>
          <td>
            {title}
          </td>

          <th>
            Art Work Description
          </th>
          <td>{description}</td>
          <th>
            Art Work ID
          </th>
          <td>{id}</td>
        </tr>
      </table>
    );
  });
}

const mapStateToProps = (state) => ({
  art: state.artReducer,
});

export default connect(mapStateToProps)(Details);
