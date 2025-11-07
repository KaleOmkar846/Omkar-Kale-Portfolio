import './HackathonGallery.css';
import hackcrux from '../assets/1000020188.jpg';
import dypDpu from '../assets/1000020189.jpg';
import ecoBhu from '../assets/1000020190.jpg';

function HackathonGallery() {
  const hackathons = [
    {
      id: 1,
      title: 'HackCrux Hackathon - Runner Ups',
      image: hackcrux,
      achievement: 'Runner Up',
      type: 'National'
    },
    {
      id: 2,
      title: 'DYP DPU Hackathon- National Finalist',
      image: dypDpu,
      achievement: 'National Finalist',
      type: 'National'
    },
    {
      id: 3,
      title: 'Eco Hackathon(IIT BHU) Finalist',
      image: ecoBhu,
      achievement: 'Finalist',
      type: 'National'
    }
  ];

  return (
    <section className="hackathon-gallery" id="hackathons">
      <div className="container">
        <div className="section-header">
          <span className="section-number">03.</span>
          <h2 className="section-title">Glimpses from Some Hackathon Finals</h2>
          <div className="section-line"></div>
        </div>

        <div className="gallery-grid">
          {hackathons.map((hackathon) => (
            <div key={hackathon.id} className="gallery-card">
              <div className="gallery-image-wrapper">
                <img 
                  src={hackathon.image} 
                  alt={hackathon.title}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-top">
                    <span className="achievement-badge">{hackathon.achievement}</span>
                    <span className="type-badge">{hackathon.type}</span>
                  </div>
                  <div className="gallery-overlay-bottom">
                    <h3 className="gallery-title">{hackathon.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HackathonGallery;
