import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import input from '../API/api';
import Loading from '../components/Loading';

function Home() {
  const artWorkList = useSelector((state) => state.artReducer);
  const dispatch = useDispatch();
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    dispatch(input());
  }, [dispatch]);

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
          // eslint-disable-nex-line
          artWorkList.filter((value) => {
            // eslint-disable-nex-line
            if (allData === '') {
              return value;
            } if (value.title.toLowerCase().includes(allData.toLowerCase())) {
              return value;
            }
            return value;
          }).map((data) => (
            <Link key={data.id} className="card" to={`/${data.id}`}>
              <div className="artImage" key={data.id}>
                <div>
                  <img className="artPicture" src={data.lqip} alt={data.alt_text} />
                  <img className="detailsbtn" src={Image} alt="button" />
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

export default Home;
