import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-container.styles";
import { useNavigate } from "react-router-dom";
function DirectoryContainer({ title, imageUrl, route }) {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate(`/${route}`);
  };

  return (
    <DirectoryItemContainer onClick={onNavigate}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Show now!</p>
      </Body>
    </DirectoryItemContainer>
  );
}

export default DirectoryContainer;
