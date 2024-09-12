import styled from "@emotion/styled";

export const FriendListLi = styled.li`
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    text-align: center;     
`

export const FriendListName = styled.p`
    font-weight: 500;
    margin-top: 10px;
    line-height: 1;
`

export const FriendStatus = styled.span`
    color: ${props => props.status ? 'green' : 'red'};
    font-size: 12px;
    line-height: 1;
   
`

