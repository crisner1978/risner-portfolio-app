import React, { useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ModalContainer,
  ModalWrapper,
  TopBox,
  BottomBox,
  CloseModalButton,
} from "./ModalElements";

//framer motion variant
const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const ModalBox = ({ showModal, setShowModal }) => {
  //close modal when clicking on the screen
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  //close modal on keypress
  const keyPress = useCallback(
    (e) => {
      if ((e.key === "esc" || "any key") && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <ModalContainer
          as={motion.div}
          variants={item}
          initial="hidden"
          animate="visible"
          exit="exit"
          ref={modalRef}
          onClick={closeModal}>
          <ModalWrapper>
            <CloseModalButton onClick={() => setShowModal(false)} />
            <TopBox>
              <h2>CertIfications</h2>
              <ul>
                <li>Responsive Web Design</li>
                <hr />
                <li>JS Algorithms & Data Structures</li>
                <hr />
                <li>Front End Development Libraries</li>
                <hr />
                <li>Back End Development and APIs</li>
              </ul>
            </TopBox>
            <BottomBox>
              <h2>My Skills</h2>
              <ul>
                <li>HTML & CSS</li>
                <hr />
                <li>Javascript</li>
                <hr />
                <li>Bootstrap</li>
                <hr />
                <li>React</li>
                <hr />
                <li>Redux</li>
                <hr />
                <li>Node</li>
                <hr />
                <li>Express</li>
                <hr />
                <li>MongoDB</li>
                <hr />
                <li>Mongoose</li>
              </ul>
            </BottomBox>
          </ModalWrapper>
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

export default ModalBox;
