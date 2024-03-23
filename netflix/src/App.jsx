
import './App.css' 

function App({ data }) {
  return (
    <>
      <section className="main-card--cointainer">
        {data.map((curElem) => {
          const { id, Name, src, links } = curElem;
          return (
            <>
              <div className="cards p-3 " key={id}>
                <div className="card">
                  <img src={src} alt="movie" className="card__img" />
                  <div className="card_info">
                    <h3 className="card_title">{Name}</h3>
                    <a href={links} target="_blank">
                      <button className='btn' >Watch Now</button>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </section >
    </>
  );
};
export default App

