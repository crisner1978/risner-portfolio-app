import { motion } from "framer-motion";
import { Button } from "./ButtonElements";

const ButtonBig = ({ type, name, primary = false, onClick }) => {
  return (
    <Button
      as={motion.button}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
      type={type}
      primary={primary}
      onClick={onClick}>
      {name}
    </Button>
  );
};

export default ButtonBig;
