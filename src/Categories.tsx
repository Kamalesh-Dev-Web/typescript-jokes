import React, { useState } from "react";

const Categories: React.FC = () => {
  const categoriesList = [
    "animal",
    "career",
    "celebrity",
    "dev",
    "explicit",
    "fashion",
    "food",
    "history",
    "money",
    "movie",
    "music",
    "political",
    "religion",
    "science",
    "sport",
    "travel",
  ];

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const styles: { [key: string]: React.CSSProperties } = {
    category: {
      width: "20%",
      height: "122vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      border: "2px solid orange",
      margin: "0 22px 0 22px",
      borderRadius: "10px",
    } as React.CSSProperties,
    text: {
      color: isHover ? "orange" : "black",
    },
  };

  return (
    <div style={styles.category}>
      <h3 style={{ textDecoration: "underline" }}>Categories</h3>
      {categoriesList.map((category) => {
        return (
          <Scat
            category={category}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            isHover={isHover}
          />
        );
      })}
    </div>
  );
};

type NewTodoProps = {
  category: string;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  isHover: boolean;
};

const Scat: React.FC<NewTodoProps> = (props) => {
  const styles: { [key: string]: React.CSSProperties } = {
    text: {
      color: props.isHover ? "orange" : "black",
    },
  };

  return (
    <div>
      <div
        onMouseEnter={props.handleMouseEnter}
        onMouseLeave={props.handleMouseLeave}
        style={styles.text}
      >
        <h5>{props.category}</h5>
      </div>
    </div>
  );
};

export default Categories;
