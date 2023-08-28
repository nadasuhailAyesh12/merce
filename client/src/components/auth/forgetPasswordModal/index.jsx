import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { forgetPassword } from "../../../actions/authActions";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdatePassword = ({ showModal, onClose }) => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors: clearEmailError,
    setValue,
  } = useForm();

  const handleChange = (e) => {
    clearEmailError("email");
    setValue("email", e.target.value);
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      const message = await dispatch(forgetPassword(data.email));
      toast.success(message);
    } catch (error) {
      toast.error(error);
    }
  });

  return (
    <div>
      <Modal show={showModal} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>forgetPassword </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <div className="form-outline mb-2.5">
              <input
                type="email"
                {...register("email", {
                  pattern: {
                    value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Not a valid email address",
                  },
                  required: "Email is required",
                })}
                className={
                  errors.email
                    ? "form-control form-control-lg is-invalid"
                    : "form-control form-control-lg"
                }
                placeholder="Enter your email"
                name="email"
                onChange={handleChange}
              />
              <label className="form-label" htmlFor="email"></label>
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            // disabled={isSubmitting}
            variant="primary"
            type='submit'
            onClick={onSubmit}
          >
            {/* {isSubmitting ? "submitting" : "submit"} */}
            submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdatePassword;
