import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import CustomInput from '../components/CustomInput';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <>
      <Meta title="Reset Password" />
      <BreadCrumb title="Reset Password" />

      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Your Password</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <CustomInput
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <CustomInput
                    type="password"
                    name="confpassword"
                    placeholder="Confirm Password"
                  />
                  <div>
                    <Link to="/forgot-password">Forgot Password?</Link>

                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button border-0" type="submit">
                        Change Password
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
