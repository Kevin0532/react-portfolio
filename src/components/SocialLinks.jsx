import '../styles/SocialLinks.css';
import GitHubIcon from '../assets/github.svg';
import LinkedInIcon from '../assets/linkedin.svg';
import InstagramIcon from '../assets/instagram.svg';

function SocialLinks() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Kevin0532',
      icon: GitHubIcon,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kevin-v-1118a2202/',
      icon: LinkedInIcon,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kevinnversteeg',
      icon: InstagramIcon,
    },
  ];

  return (
    <div className="social-media">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={link.name}
        >
          <img src={link.icon} alt={link.name} className="social-icon" />
          <span className="social-text">{link.name}</span>
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
