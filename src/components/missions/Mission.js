import { Badge, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bookMission } from '../../redux/missions/missionSlice';

const Mission = ({
  id,
  name,
  description,
  isReserved,
}) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{name}</td>
      <td className="px-5">{description}</td>
      <td className="align-middle">
        <Badge
          bg={isReserved ? 'info' : 'secondary'}
          className="fs-6"
        >
          {isReserved ? 'Active Member' : 'Not A Member'}
        </Badge>
      </td>
      <td className="align-middle">
        <Button
          className="fs-6 mx-3 text-nowrap"
          variant={isReserved ? 'outline-danger' : 'outline-secondary'}
          onClick={() => dispatch(bookMission(id))}
        >
          {isReserved ? 'Leave Mission' : 'Join Mission'}
        </Button>
      </td>
    </tr>
  );
};

Mission.defaultProps = {
  id: '',
  name: '',
  description: '',
  isReserved: false,
};
Mission.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  isReserved: PropTypes.bool,
};

export default Mission;
