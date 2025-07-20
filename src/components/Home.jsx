import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-3 fw-bold">The Generics</h1>
          <button
            className="btn btn-outline-light mt-4"
            onClick={() => navigate('/store')}
          >
            Get Our Latest Albums
          </button>
        </div>
      </section>

      <section className="text-center py-5">
        <h2 className="fw-bold mb-5" style={{ fontFamily: 'cursive' }}>
          UPCOMING TOURS
        </h2>
        <div className="container">
          <div className="table-responsive">
            <table className="table table-borderless">
              <tbody>
                {[
                  ['JUL 16', 'MUMBAI, MH', 'JIO WORLD CENTRE'],
                  ['JUL 19', 'DELHI, DL', 'INDIRA GANDHI INDOOR STADIUM'],
                  ['JUL 22', 'BENGALURU, KA', 'ECHOSPACE'],
                  ['JUL 29', 'HYDERABAD, TS', 'GACHIBOWLI STADIUM'],
                  ['AUG 2', 'PUNE, MH', 'PHOENIX MARKETCITY'],
                  ['AUG 7', 'CHENNAI, TN', 'MARG SWARNABHOOMI'],
                ].map(([date, city, venue], idx) => (
                  <tr key={idx} className="align-middle">
                    <td className="fw-bold">{date}</td>
                    <td>{city}</td>
                    <td>{venue}</td>
                    <td>
                      <button className="btn btn-info text-white fw-semibold">
                        BOOKING STARTS SOON
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <footer className="bg-info text-center text-white py-3">
        <p className="m-0">The Generics &copy; 2025</p>
      </footer>
    </>
  );
};

export default Home;
