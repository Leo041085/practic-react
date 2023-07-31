import { registrationThunk } from 'Store/Auth/AuthTunk';
import FormSignUp from 'components/FormSignUp/FormSignUp';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken } from 'Store/Auth/AuthSelector';


function SignUpPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(getToken); 

  const onFormSubmit = value => {
    dispatch(registrationThunk(value));
  };

  useEffect(()=>{
if (token){
    navigate('/', {replace: true});
}
  });
  return (
    <div>
      <h1>SignUpPage</h1>
      <FormSignUp onFormSubmit={onFormSubmit} />
    </div>
  );
}

export default SignUpPage;
