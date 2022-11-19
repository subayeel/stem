import React, { useState } from "react";
import styled from "styled-components";
import { CenterFlexContainer } from "../Global";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

export const StyledCard = styled(CenterFlexContainer)`
  position: relative;
  height: 250px;
  min-width: 250px;
  transition: 0.5s ease-in-out;
  background-color: #fff;
  margin: 14px;

  flex: 40%;

  &:hover {
    cursor: pointer;
    > div {
      opacity: 1;
    }
    > p {
      display: block;

      transform: scale(1.1);
    }
  }
`;

export const BgOverlay = styled.div`
  position: absolute;
  transition: all 0.4s ease-in-out 0s;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

export const HoverText = styled.p`
  display: none;
  transition: all 0.4s ease-in-out 0s;

  margin: 0;
  font-size: 22px;
  color: #fff;
  z-index: 2;
`;

export const ModalContent = styled(CenterFlexContainer)`
  flex-direction: column;
  align-items: start;
`;
export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 0 7px;
  margin: 0;
  color: #fff;
  justify-content: space-between;
`;

export const ModalBody = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  color: #fff;
  @media screen and (max-width:768px) {
    flex-direction: column;
  }
`;
export const EventProfile = styled.div`
  flex: 25%;
  padding: 7px;

  overflow: hidden;
`;
export const EventDetails = styled.div`
  flex: 75%;
  padding: 7px;
  height: 500px;
  overflow: auto;
`;

export const TextWrap = styled.div`
  margin: 5px 0;
`;

export const Line = styled.hr`
  background-color: #fff;
  height: 2px;
  width: 90%;
  margin: auto;
`;
export const IconContainer = styled(CenterFlexContainer)`
  width: 48px;
  height: 56px;
  &:hover {
    cursor: pointer;
    color: #eee;
  }
`;
export const CloseIcon = styled(FaTimes)`
  width: 100px;
  height: 100px;
`;

const EventCard = ({ route, eventId, imageUrl, title }) => {
  const [modalIsOpen, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const customStyles = {
    content: {
      overflow: "hidden",
      height: "550px",
      width: "950px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#202425",
    },
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ModalContent>
          <ModalHeader>
            <h1>{title}</h1>
            <IconContainer>
              <FaTimes onClick={closeModal}></FaTimes>
            </IconContainer>
          </ModalHeader>
          <Line />
          <ModalBody>
            <EventProfile>
              <img src={imageUrl} alt="event Image" />
              <TextWrap>
                aspernatur similique nemo expedita ab, maxime cupiditate. Fugiat
                neque officiis minus, quisquam facilis numquam. Cumque, quae,
                aliquid eius eveniet voluptates voluptas voluptate hic
                architecto laudantium aspernatur soluta ipsum odit. Temporibus
                praesentium consequatur minima odit. Quisquam odio eos atque{" "}
              </TextWrap>
              cum earum! Dolorem, expedita officia. Consequuntur nulla ullam
              voluptatum consectetur ut?
            </EventProfile>
            <EventDetails>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Delectus sequi nemo mollitia esse, quam, eius facilis
                perferendis quaerat ad cumque, ipsa voluptatum voluptate sint at
                adipisci. Corporis provident ex maxime, ducimus sint soluta
                dignissimos deleniti aspernatur, eaque culpa nobis. Iusto
                dolores reprehenderit eaque magnam qui natus accusantium nam
                illo incidunt commodi velit est fuga inventore autem explicabo
                quidem aut, consequatur doloribus deleniti, repellendus dolore.
                Odit fugiat repellendus accusantium quam blanditiis, eligendi
                incidunt dolor saepe sit. Dolores delectus recusandae excepturi
                dolor aperiam voluptatibus, omnis accusamus cupiditate impedit
                cum ad pariatur, officia natus ratione corrupti consequatur.
                Iste rerum quibusdam sit? Optio animi vel distinctio aliquid
                laudantium dolorum, quia laborum repellendus aspernatur, ad
                minus et? Laudantium, possimus, magni dolorum blanditiis commodi
                consectetur non ipsa consequatur cumque officia eaque natus,
                dolorem exercitationem nesciunt id iste laborum mollitia
                repudiandae expedita? Error facilis aliquam at. Nemo eligendi
                cupiditate odit. Facere eveniet dolor quaerat iste velit alias
                corporis doloremque, optio cum hic atque deleniti vitae
                delectus. Ipsa, nulla labore. Ullam, earum ducimus corporis
                praesentium quis tempore suscipit sapiente deleniti et possimus
                impedit aliquam, necessitatibus, commodi rerum expedita quae
                autem neque accusantium similique provident? Accusamus tempore
                labore delectus reiciendis optio doloremque harum, at, soluta,
                ad magnam ipsa assumenda.
              </p>
            </EventDetails>
          </ModalBody>
        </ModalContent>
      </Modal>
      <StyledCard onClick={openModal}>
        <BgOverlay></BgOverlay>
        <HoverText>{title}</HoverText>
      </StyledCard>
    </>
  );
};

export default EventCard;
