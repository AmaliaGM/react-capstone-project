import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { Link } from 'react-router-dom';
import input from '../API/api';
import Loading from '../components/Loading';

function Home({ art }) {
  const artWorkList = useSelector((state) => state.artReducer);
  const dispatch = useDispatch();
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    dispatch(input());
  }, [dispatch]);
  console.log(art);

  return (
    <div className="artwork">
      <div>
        <input
          id="search"
          type="text"
          placeholder="Search for a piece of art"
          onChange={(event) => setAllData(event.target.value)}
        />
      </div>
      <div id="card">
        {artWorkList.length <= 1 ? (
          <Loading />
        ) : (
          // eslint-disable-next-line
          artWorkList.filter((data) => {
            // eslint-disable-next-line
             if (allData === '') {
              return data;
              // eslint-disable-next-line
            } if (data.title.toLowerCase().includes('allData'.toLowerCase())) {
              return data;
            }
            return artWorkList;
          }).map((data) => (
            <Link key={data.id} className="card" to={`/${data.id}`}>
              <div className="artImage" key={data.id}>
                <div>
                  <img className="artPicture" src={data.images} height="500" width="500" alt="monet work" />
                  <p>{data.image}</p>
                  <i className="brush" aria-hidden="true" />
                </div>
              </div>
              <article>
                <h1>
                  {data.title}
                </h1>
                <i />
              </article>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  art: state.artReducer,
});
export default connect(mapStateToProps)(Home);
