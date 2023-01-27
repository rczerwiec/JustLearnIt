import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface PropsTypes {
  icon: string;
  className: string;
  navigateTo: string;
}

function NavigationButton({ icon, className, navigateTo }: PropsTypes) {
  return (
    <Link to={`/${navigateTo}`}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={className}
      >
        <img className="m-3" src={icon} alt="Add Icon"></img>
      </motion.button>
    </Link>
  );
}

export default NavigationButton;
