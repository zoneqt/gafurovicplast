"use client";

import Container from "@/components/container";
import Loading from "@/components/loading";
import Section from "@/components/section";
import { FormikValues, useFormik } from "formik";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Bounce, toast } from "react-toastify";
import * as yup from "yup";

const contactSchema = yup.object().shape({
  name: yup.string().required("Please provide your name"),
  email: yup
    .string()
    .email("Please provide a valid email")
    .required("Please provide your email"),
  subject: yup.string().required("Please provide a subject"),
  message: yup.string().required("Please provide a message"),
});

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = () => {
    setIsLoading(true);
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "success") {
          setIsLoading(false);
          toast(
            <span className="text-[14px]">
              Email sent successfuly !<br></br>I will respond as soon as
              possible 😊
            </span>,
            {
              position: "bottom-right",
              className: "bg-backgroundAlt",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            }
          );
          resetForm();
        }
      });
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: sendEmail,
  });

  return (
    <div id="contact">
      <Section>
        <Container>
          <div className="flex flex-col items-center gap-[40px] ">
            <h2 className="text-[36px] font-bold max-lg:text-[28px] leading-[1.2] max-md:text-[24px]">
              Get in touch
            </h2>
            <div className="max-w-[750px] w-full p-[40px] gap-[20px] flex bg-backgroundAlt rounded-[25px] max-sm:flex-col card-wrapper">
              <div className="card-content bg-backgroundAlt rounded-[25px]"></div>
              <div className="flex flex-col gap-[20px] relative">
                <p className="text-[14px] font-regular text-text">
                  Feel free to reach out—I'd love to connect
                  <br className="max-sm:hidden"></br> and discuss how we can
                  work together!
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="gap-[20px] flex flex-col"
                  autoComplete="off"
                >
                  <div className="relative">
                    <input
                      onChange={handleChange}
                      value={values.name}
                      type="text"
                      name="name"
                      placeholder="Name"
                      className={`w-full bg-background px-[12px] py-[8px] outline-none rounded-[5px] border-[1px] border-[#808186] text-[14px] focus:border-primaryGreen ${
                        errors.name && touched.name && "border-[#ff5252]"
                      }`}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name && (
                      <span className="absolute left-0 w-full top-[100%] text-[12px] font-light text-[#ff5252]">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      onChange={handleChange}
                      value={values.email}
                      type="email"
                      name="email"
                      placeholder="Email"
                      className={`w-full bg-background px-[12px] py-[8px] outline-none rounded-[5px] border-[1px] border-[#808186] text-[14px] focus:border-primaryGreen ${
                        errors.email && touched.email && "border-[#ff5252]"
                      }`}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                      <span className="absolute left-0 w-full top-[100%] text-[12px] font-light text-[#ff5252]">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      onChange={handleChange}
                      value={values.subject}
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className={`w-full bg-background px-[12px] py-[8px] outline-none rounded-[5px] border-[1px] border-[#808186] text-[14px] focus:border-primaryGreen ${
                        errors.subject && touched.subject && "border-[#ff5252]"
                      }`}
                      onBlur={handleBlur}
                    />
                    {errors.subject && touched.subject && (
                      <span className="absolute left-0 w-full top-[100%] text-[12px] font-light text-[#ff5252]">
                        {errors.subject}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <textarea
                      onChange={handleChange}
                      value={values.message}
                      name="message"
                      placeholder="Message"
                      className={`w-full min-h-[100px] bg-background px-[12px] py-[8px] outline-none rounded-[5px] border-[1px] border-[#808186] text-[14px] resize-none focus:border-primaryGreen ${
                        errors.message && touched.message && "border-[#ff5252]"
                      }`}
                      onBlur={handleBlur}
                    />
                    <span className="absolute left-0 w-full top-[100%] text-[12px] font-light text-[#ff5252]">
                      {errors.message && touched.message && errors.message}
                    </span>
                  </div>
                  {isLoading ? (
                    <div className="w-full h-[40px] flex items-center justify-center p-[10px] border-[1px] border-primaryGreen text-primaryGreen font-medium rounded-[5px]">
                      <Loading />
                    </div>
                  ) : (
                    <motion.button
                      type="submit"
                      className="w-full h-[40px] flex items-center justify-center p-[10px] border-[1px] border-primaryGreen text-primaryGreen font-medium rounded-[5px] hover:bg-primaryGreen hover:text-backgroundAlt"
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      Submit
                    </motion.button>
                  )}
                </form>
              </div>
              <div className="w-[1px] min-h-full bg-background max-sm:min-h-auto max-sm:h-[1px] max-sm:w-full relative"></div>
              <div className="flex flex-col justify-center max-sm:text-center relative">
                <p className="text-text text-[20px] font-semiBold">Based in</p>
                <p className="text-primaryGreen text-[16px] font-light leading-[1]">
                  Bosnia & Herzegovina <br></br>Bugojno , 70230
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Contact;
