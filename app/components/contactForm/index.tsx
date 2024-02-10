import React, { FormEvent, useState } from "react";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  comments: string;
  fullNameError: string;
  emailError: string;
  phoneError: string;
  commentsError: string;
}

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    comments: "",
    fullNameError: "",
    emailError: "",
    phoneError: "",
    commentsError: "",
  });
  const [toastVisible, setToastVisible] = useState(false);

  const validateEmail = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let isValid = true;
    let newFormState = { ...formState };

    if (newFormState.fullName === "") {
      newFormState.fullNameError = "Full Name is required";
      isValid = false;
    } else {
      newFormState.fullNameError = "";
    }

    if (newFormState.email === "") {
      newFormState.emailError = "Email is required";
      isValid = false;
    } else if (!validateEmail(newFormState.email)) {
      newFormState.emailError = "Email is not valid";
      isValid = false;
    } else {
      newFormState.emailError = "";
    }

    if (newFormState.phone === "") {
      newFormState.phoneError = "Phone is required";
      isValid = false;
    } else {
      newFormState.phoneError = "";
    }

    if (newFormState.comments === "") {
      newFormState.commentsError = "Comments are required";
      isValid = false;
    } else {
      newFormState.commentsError = "";
    }

    setFormState(newFormState);

    if (isValid) {
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 3000);
    }
  };
  return (
    <div>
      <div className="bg-white p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Contact Agent</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-sm font-semibold text-gray-700 mb-2"
              htmlFor="fullName"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full p-3 border border-gray-300 rounded"
              value={formState.fullName}
              onChange={(e) =>
                setFormState((prevState) => ({
                  ...prevState,
                  fullName: e.target.value,
                }))
              }
              required
            />
            {formState.fullNameError && <div>{formState.fullNameError}</div>}
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-semibold text-gray-700 mb-2"
              htmlFor="email"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded"
              onChange={(e) =>
                setFormState((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
              value={formState.email}
              required
            />
            {formState.emailError && <div>{formState.emailError}</div>}
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-semibold text-gray-700 mb-2"
              htmlFor="phone"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full p-3 border border-gray-300 rounded"
              onChange={(e) =>
                setFormState((prevState) => ({
                  ...prevState,
                  phone: e.target.value,
                }))
              }
              value={formState.phone}
              required
            />
            {formState.phoneError && <div>{formState.phoneError}</div>}
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-semibold text-gray-700 mb-2"
              htmlFor="comments"
            >
              Comments *
            </label>
            <textarea
              id="comments"
              className="w-full p-3 border border-gray-300 rounded"
              value={formState.comments}
              onChange={(e) =>
                setFormState((prevState) => ({
                  ...prevState,
                  comments: e.target.value,
                }))
              }
              required
            ></textarea>
            {formState.commentsError && <div>{formState.commentsError}</div>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition-colors"
            onClick={handleSubmit}
          >
            Contact Now
          </button>
          {toastVisible && (
            <div className="fixed bottom-0 right-0 m-6 bg-green-500 text-white py-2 px-4 rounded">
              Message sent
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
