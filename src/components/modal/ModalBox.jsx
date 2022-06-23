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
                <hr />
                <li>Quality Assurance</li>
                <hr />
                <li>Information Security</li>
                <hr />
              </ul>
            </TopBox>
            <BottomBox>
              <h2>My Skills</h2>
              <ul>
                <li>HTML</li>
                <hr />
                <li>CSS</li>
                <hr />
                <li>JS</li>
                <hr />
                <li>TS</li>
                <hr />
                <li>React JS</li>
                <hr />
                <li>Next JS</li>
                <hr />
                <li>Redux</li>
                <hr />
                <li>Recoil</li>
                <hr />
                <li>Bootstrap</li>
                <hr />
                <li>TailwindCSS</li>
                <hr />
                <li>Styled Components</li>
                <hr />
                <li>Node JS</li>
                <hr />
                <li>Express</li>
                <hr />
                <li>Firebase</li>
                <hr />
                <li>RESTful APIs</li>
                <hr />
                <li>MongoDB</li>
                <hr />
                <li>Sanity</li>
                <hr />
                <li>GraphCMS</li>
                <hr />
                <li>Mongoose</li>
                <hr />
                <li>Chai</li>
                <hr />
                <li>Helmet</li>
              </ul>
            </BottomBox>
          </ModalWrapper>
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

export default ModalBox;
