import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updatePassword } from "../../../actions/authActions";

const UpdatePassword = ({ showModal, onClose }) => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    clearErrors: clearInputErrors,
    handleSubmit,
    setValue,
  } = useForm();

  const handleInputChange = (e) => {
    clearInputErrors(e.target.name);
    setValue(e.target.name, e.target.value);
  };
  const onSubmit = handleSubmit(async (data) => {
    try {
      const message = await dispatch(updatePassword(data));
      toast.success(message);
      onClose();
    } catch (error) {
      toast.error(error);
    }
  });

  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>update your password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form style={{ width: 450 }}>
          <div className="form-outline  my-3">
            <input
              type="password"
              {...register("oldPassword", {
                minLength: {
                  value: 6,
                  message: "Password must be more than 6 bits",
                },
                maxLength: {
                  value: 64,
                  message: "Password must be less than 64  bits",
                },
              })}
              placeholder="Enter your old password"
              onChange={handleInputChange}
              className={
                errors.oldPassword
                  ? "form-control form-control-lg is-invalid"
                  : "form-control form-control-lg"
              }
              name="oldPassword"
              id="oldPassword"
            />
            {errors.oldPassword && (
              <p className="text-danger">{errors.oldPassword.message}</p>
            )}
          </div>
          <div className="form-outline">
            <input
              type="password"
              {...register("newPassword", {
                minLength: {
                  value: 6,
                  message: "Password must be more than 6 bits",
                },
                maxLength: {
                  value: 64,
                  message: "Password must be less than 64  bits",
                },
              })}
              placeholder="Enter your updated password"
              onChange={handleInputChange}
              className={
                errors.newPassword
                  ? "form-control form-control-lg is-invalid"
                  : "form-control form-control-lg"
              }
              name="newPassword"
              id="newPassword"
            />
            {errors.newPassword && (
              <p className="text-danger">{errors.newPassword.message}</p>
            )}
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onSubmit}>
          submit
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdatePassword;
