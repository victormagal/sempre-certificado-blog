import * as Icon from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function RegularIcon({ icon, iconColor, newClasses }) {
  const { [icon]: fontIcon } = {
    faBuilding: Icon.faBuilding,
    faCircle: Icon.faCircle,
    faCircleCheck: Icon.faCircleCheck,
    faCircleDot: Icon.faCircleDot,
    faCirclePlay: Icon.faCirclePlay,
    faComments: Icon.faComments,
    faEye: Icon.faEye,
    faFaceSmile: Icon.faFaceSmile,
    faFaceSmileWink: Icon.faFaceSmileWink,
    faFile: Icon.faFile,
    faFileLines: Icon.faFileLines,
    faGem: Icon.faGem,
    faHandshake: Icon.faHandshake,
    faLemon: Icon.faLemon,
    faLightbulb: Icon.faLightbulb,
    faMoneyBill1: Icon.faMoneyBill1,
    faPaperPlane: Icon.faPaperPlane,
    faPenToSquare: Icon.faPenToSquare,
    faStar: Icon.faStar,
    faUser: Icon.faUser
  };

  return (
    <FontAwesomeIcon
      className={`${newClasses && newClasses}`}
      icon={fontIcon}
      style={{ color: iconColor }}
    />
  );
}
