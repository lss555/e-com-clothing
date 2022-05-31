import styled from 'styled-components'
import Button from '../button/button.component'

export const PaymentFormContainer = styled.div`
 height: 300px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
  background: #D79C77;
  padding: 0 15px 25px 15px;
  border-radius: 15px;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
