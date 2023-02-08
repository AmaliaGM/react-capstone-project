import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { Link } from 'react-router-dom';
import input from '../API/api';
import Loading from '../components/Loading';
import img from '../paintbrush.png';

// eslint-disable-next-line
          function Home() {
  const artWorkList = useSelector((state) => state.artReducer);
  const dispatch = useDispatch();
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    dispatch(input());
  }, []);

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
            return data;
          }).map((data) => (
            <Link key={data.id} className="card" to={`/posts/${data.id}`}>
              <div className="artImage" key={data.id}>
                <div className="between">
                  <img className="artPicture" src={data.images === undefined ? '../notAvaiable.png' : 
data.images.url} height="250" width="250" alt="monet work" />
                  <p>{data.image}</p>
                  <div className="detailsLink" to="/Details">
                    Click on the Image for more Details
                    <img src={img} className="brush" alt="brush" />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="displayTitle">
                  {data.title}
                </h1>
              </div>
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
