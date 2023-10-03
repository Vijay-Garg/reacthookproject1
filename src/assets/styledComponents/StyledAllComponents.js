import { TextField } from "@mui/material";
import Styled from "@emotion/styled";

export const StyledTextField = Styled(TextField)`

input {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; 
        height: 10,
        width: 120,
        backgroundColor: white
        border: 10px solid;
        color: black;
}
        `;
