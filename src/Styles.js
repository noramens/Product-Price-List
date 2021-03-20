import styled from "styled-components";
import InfoIcon from "@material-ui/icons/Info";

export const Container = styled.div`
  width: 80vh;
`;

export const AppTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
    background-color: ${(props) =>
      props.primary ? "#52D9C5" : props.delete ? "#E86480" : "#fff"};
    color: ${(props) => (!props.secondary ? "#fff" : "#131E33")};
    border: ${(props) => (props.secondary ? "1px solid #131E33" : "#52D9C5")};
    outline: ${(props) => (props.primary ? "#52D9C5" : "#fff")};
    padding: ${(props) => (props.sm ? "7px 7px" : "11px 16px")};
    margin-right: ${(props) => props.delete && "10px"}
    font-weight: bold;
    border-radius: 3px;
    &:hover{
        cursor: pointer
    }
    &:disabled {
        border: 1px solid #e5e5e5;
        color: rgba(0, 0, 0, 0.2);
        background-color: #e5e5e5;
        cursor: no-drop;
      }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const DeleteDescription = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoImage = styled(InfoIcon)`
  width: 50px !important;
  height: 50px !important;
  fill: #e86480 !important;
  margin-right: 10px !important;
`;

export const Bolden = styled.span`
  font-weight: bold;
`;

export const Label = styled.label`
  font-size: 10px;
  color: #eee;
`;

export const deleteIcon = {
  cursor: "pointer",
  marginLeft: 10,
  fill: "#E86480",
};

export const tableHead = {
  fontWeight: "bold",
};
