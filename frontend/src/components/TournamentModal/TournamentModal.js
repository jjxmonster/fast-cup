import React, { Suspense, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useHistory } from 'react-router-dom';

import { modalAnimation } from '../Animations/Animations';

import LoadingIndicator from '../LoadingIndicator';
import ModalContent from './ModalContent';

import {
   StyledModalWrapper,
   StyledTournamentModal,
   StyledMobileCloseButton,
} from './TournamentModal.css';

const TournamentModal = () => {
   let history = useHistory();

   const handleGoBack = () => {
      history.goBack();
   };

   useEffect(() => {
      modalAnimation();
      document.querySelector('body').style = 'overflow:hidden';
      return () => (document.querySelector('body').style = 'overflow:visible');
   }, []);

   return createPortal(
      <StyledModalWrapper onClick={handleGoBack}>
         <StyledTournamentModal
            id='tournamentModal'
            onClick={e => e.stopPropagation()}
         >
            <StyledMobileCloseButton onClick={handleGoBack}>
               &#10006;
            </StyledMobileCloseButton>
            <Suspense fallback={<LoadingIndicator />}>
               <ModalContent />
            </Suspense>
         </StyledTournamentModal>
      </StyledModalWrapper>,
      document.querySelector('#modal')
   );
};

export default TournamentModal;
