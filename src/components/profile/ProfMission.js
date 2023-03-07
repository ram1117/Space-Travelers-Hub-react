import { useDispatch } from 'react-redux';
import {
  Badge, Button,
} from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { bookMission } from '../../redux/missions/missionSlice';

const ProfMission = ({
  id,
  name,
  isReserved,
  wiki,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="border py-3">
      <h3 className="my-5 fs-3">
        {name}
        {isReserved && <Badge className="ms-2 fs-6" bg="success">Joined</Badge>}
      </h3>
      <div className="d-flex justify-content-center">
        <Button
          variant="outline-success"
          className="mx-1"
          onClick={() => dispatch(bookMission(id))}
        >
          Leave Mission
        </Button>
        <Button
          as="a"
          href={wiki}
          target="_blank"
          variant="outline-primary"
          className="mx-1"
        >
          Mission Data
        </Button>
      </div>
    </div>
  );
};

ProfMission.defaultProps = {
  id: '',
  isReserved: false,
  name: '',
  wiki: '',
};

ProfMission.propTypes = {
  id: PropTypes.string,
  isReserved: PropTypes.bool,
  name: PropTypes.string,
  wiki: PropTypes.string,
};

export default ProfMission;
