import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { Link } from 'react-router-dom';
import input from '../API/api';
import Loading from '../components/Loading';
import img from '../paintbrush.png';

function Home() {
  const artWorkList = useSelector((state) => state.artReducer);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  // filter search: if dif from search = artworklist ,else, filter
  const results = !search ? artWorkList : artWorkList.filter(
    (data) => data.title.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    dispatch(input());
  }, []);

  return (
    <div className="artwork">
      <div>
        <input
          id="search"
          type="text"
          value={search}
          placeholder="Search for a Monet piece of art"
          onChange={searcher}
        />
      </div>
      <div id="card">
        {artWorkList.length <= 1 ? (
          <Loading />
        ) : (results.map((data) => (
          <Link key={data.id} className="card" to={`/posts/${data.id}`}>
            <div className="artImage" key={data.id}>
              <div className="between">
                <img
                  className="artPicture"
                  src={data.images === undefined ? '../notAvaiable.png'
                    : data.images.url}
                  height="250"
                  width="250"
                  alt="monet work"
                />
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
