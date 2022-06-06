import HomeWrapper from "../../wrappers/HomeWrapper/HomeWrapper";
import PortalPortal from "../../portals/PortalPortal";
import PortalContentWrapper from "../../wrappers/PortalContentWrapper/PortalContentWrapper";
import PortalHeader from "../../components/PortalHeader/PortalHeader";
import Aside from "../../components/Aside/Aside";
import MainClass from "../../components/MainClass/MainClass";
import AddClassModal from "../../components/AddClassModal/AddClassModal";
import { useSelector } from "react-redux";
import ChangeGradeModal from "../../components/ChangeGradeModal/ChangeGradeModal";
import AddAssignmentModal from "../../components/AddAssignmentModal/AddAssignmentModal";
import CompletedModal from "../../components/CompletedModal/CompletedModal";

const Portal = () => {
  const changeGradeModalSelector = useSelector(
    (state) => state.ChangeGradeModalReducer
  );
  const addClassModal = useSelector((state) => state.AddClassModal);

  const addAssignmentModalSelector = useSelector(
    (state) => state.AddAssignmentModalReducer
  );

  const completedModal = useSelector((state) => state.CompletedModalReducer);

  return (
    <PortalPortal>
      {changeGradeModalSelector.isModal && <ChangeGradeModal />}
      {addClassModal.isModal && <AddClassModal />}
      {addAssignmentModalSelector.isModal && <AddAssignmentModal />}
      {completedModal.isModal && <CompletedModal />}
      <HomeWrapper>
        <PortalHeader />
        <PortalContentWrapper>
          <Aside />
          <MainClass />
        </PortalContentWrapper>
      </HomeWrapper>
    </PortalPortal>
  );
};

export default Portal;
