import '../styles/components.Card.css';

const Card = ({ name, author, date, description, image, link }) => {
  const formatDate = (value, locale = 'pt-BR', options = { day: 'numeric', month: 'long', year: 'numeric' }) => {
    if (!value) return '';
    const lowered = String(value).trim().toLowerCase();
    if (lowered === 'unknown') return 'Unknown';
    const parsed = new Date(value);
    if (isNaN(parsed)) return value;
    return new Intl.DateTimeFormat(locale, options).format(parsed);
  };

  const formattedDate = formatDate(date);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="card">
      <div className="card-header">
        <div className="card-image-container">
          <img src={image} alt={name} className="card-image" loading="lazy" />
        </div>
        <div className="card-title-group">
          <h2 className="card-title">{name}</h2>
          <div className="card-meta">
            <span className="author">{author}</span>
            <span className="separator">•</span>
            <span className="date">{formattedDate}</span>
          </div>
        </div>
      </div>
      <p className="card-description">
        {description}
      </p>
    </a>
  );
};

export default Card;
