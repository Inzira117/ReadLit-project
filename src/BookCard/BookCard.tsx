import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa"; // npm install react-icons

interface BookCardProps {
  title: string;
  author: string;
  genre: string;
  imageUrl: string;
  rating: number; 
}

const BookCard: React.FC<BookCardProps> = ({ title, author, genre, imageUrl, rating }) => {
  // Generate 5 stars based on rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} className="text-warning" />
        ) : (
          <FaRegStar key={i} className="text-muted" />
        )
      );
    }
    return stars;
  };

  return (
    <div className="col-md-4 mb-4">
      <div
        className="card h-100 w-100 shadow-sm border-0"
        style={{
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        }}
      >
        <img
          src={imageUrl}
          className="card-img-top"
          alt={`${title} cover`}
          style={{ height: "250px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h3 className="card-title mb-2">{title}</h3>
          <h4 className="card-text mb-1">{author}</h4>
          <h4 className="card-text">{genre}</h4>

          <div className="mt-auto d-flex align-items-center gap-1">
            {renderStars()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;