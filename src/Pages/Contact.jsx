import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faInstagram, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const profile = {
    name: "Dr Tsion Tassew",
    profession: "Software Developer and Medical Doctor",
    image: "/img/gallery/img_14.jpg",
    socials: {
      instagram: "tsion_tassew_m",
      facebook: "Tsion Tassew",
      linkedin: "linkedin.com/in/tsion-tassew",
      email: "tsiontassew91@gmail.com"
    }
  };

  return (
    <div className="contact-card">
      <img 
        src={profile.image} 
        alt={profile.name} 
        className="contactimg" 
      />

      <div className="contact-info">
        <h3 className="name">{profile.name}</h3>
        <p className="profession">{profile.profession}</p>
        
        <div className="social-links">
          <a href={`https://instagram.com/${profile.socials.instagram}`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href={`https://facebook.com/${profile.socials.facebook}`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href={`https://linkedin.com/in/${profile.socials.linkedin}`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href={`mailto:${profile.socials.email}`}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  );
}