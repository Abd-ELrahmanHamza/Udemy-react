// Import CSS
import styles from "./Description.module.css";

// Import react icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// Import hooks
import { useState } from "react";

const Description = () => {
  const [showMore, setShowMore] = useState(true);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <h2>Description</h2>
      <p
        className={`${
          showMore ? styles["description-paragraph-show-more"] : ""
        } ${showMore ? styles["description-paragraph"] : ""}`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis
        inventore reprehenderit quasi officia molestias eligendi possimus
        delectus esse minima aut sunt natus, dolorum quia aliquam iusto itaque?
        Assumenda, omnis. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Fugiat ipsa magni assumenda doloribus earum maxime eos fugit
        provident exercitationem at vero corrupti quasi quisquam beatae possimus
        delectus sed, eligendi ex. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Ut distinctio tenetur explicabo mollitia quis vel sunt
        ad expedita, nulla eum blanditiis, tempore perferendis fuga repellendus
        pariatur culpa dolore? Fuga, ratione! Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Omnis consequuntur officiis magni
        deleniti, eius doloremque fuga ducimus esse. Cum autem velit perferendis
        assumenda blanditiis non tempore sunt ipsum consectetur quod? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis
        inventore reprehenderit quasi officia molestias eligendi possimus
        delectus esse minima aut sunt natus, dolorum quia aliquam iusto itaque?
        Assumenda, omnis. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Fugiat ipsa magni assumenda doloribus earum maxime eos fugit
        provident exercitationem at vero corrupti quasi quisquam beatae possimus
        delectus sed, eligendi ex. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Ut distinctio tenetur explicabo mollitia quis vel sunt
        ad expedita, nulla eum blanditiis, tempore perferendis fuga repellendus
        pariatur culpa dolore? Fuga, ratione! Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Omnis consequuntur officiis magni
        deleniti, eius doloremque fuga ducimus esse. Cum autem velit perferendis
        assumenda blanditiis non tempore sunt ipsum consectetur quod?
      </p>
      <button className={styles["show-more-btn"]} onClick={handleShowMore}>
        Show more {showMore && <IoIosArrowDown />}{" "}
        {!showMore && <IoIosArrowUp />}
      </button>
    </div>
  );
};

export default Description;
