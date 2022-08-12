import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Dispatch, SetStateAction } from "react";

// type catprops = {
//   category: string;
//   setCategory: string;
// };

interface catprops {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
}

const Categories: React.FC<catprops> = (props: catprops) => {
  const { category, setCategory } = props;
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

  // const [isHover, setIsHover] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHover(true);
  // };
  // const handleMouseLeave = () => {
  //   setIsHover(false);
  // };
  const styles: { [key: string]: React.CSSProperties } = {
    category: {
      width: "20%",
      height: "83vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      border: "2px solid orange",
      margin: "0 22px 0 22px",
      borderRadius: "10px",
    } as React.CSSProperties,
    // text: {
    //   color: isHover ? "orange" : "black",
    // },
  };
  return (
    <div style={styles.category}>
      <h3
        style={{
          textDecoration: "underline",
          fontFamily: "Bungee Shade",
          fontSize: "20px",
        }}
      >
        Categories
      </h3>
      {categoriesList.map((category) => {
        return (
          <List sx={{ padding: "0", height: "4.5-vh" }}>
            <ListItem>
              <ListItemButton
                sx={{ borderRadius: "10px", height: "10px" }}
                onClick={() => {
                  setCategory(category);
                }}
              >
                <ListItemText
                  primary={category}
                  sx={{
                    fontFamily: "Press Start 2P",
                    fontWeight: "bold",
                    "&:hover": {
                      color: "orange",
                    },
                  }}
                  disableTypography
                />
              </ListItemButton>
            </ListItem>
          </List>
        );
      })}
    </div>
  );
};

// type NewTodoProps = {
//   category: string;
//   handleMouseEnter: () => void;
//   handleMouseLeave: () => void;
//   isHover: boolean;
// };

//CODE FOR MA REFERENCE //

// const Scat: React.FC<NewTodoProps> = (props) => {
//   const styles: { [key: string]: React.CSSProperties } = {
//     text: {
//       color: props.isHover ? "orange" : "black",
//     },
//   };

//   return (
//     <div>
//       <div
//         onMouseEnter={props.handleMouseEnter}
//         onMouseLeave={props.handleMouseLeave}
//         style={styles.text}
//       >
//         <h5>{props.category}</h5>
//       </div>
//     </div>
//   );
// };

export default Categories;
