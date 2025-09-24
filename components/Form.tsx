"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import MotionDiv from "./MotionDiv";
import { useTranslations } from "next-intl";
import { animatedContactRight } from "@/utils/motionObjects";
import Toast from "./Toast";
import { Link } from "@/i18n/navigation";

// ====================== Main Form Component ======================
function Form() {
  const [checked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showToast, setShowToast] = useState(false);

  const t = useTranslations("Contact");
  const formData = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: t("name_placeholder"),
      required: t("name_required"),
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: t("email_placeholder"),
      required: t("email_required"),
    },
    {
      id: 3,
      name: "phone",
      type: "number",
      placeholder: t("phone_placeholder"),
      required: t("phone_required"),
    },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setShowToast(true);
    reset();
  };

  return (
    <MotionDiv
      {...animatedContactRight}
      className="p-5 shadow-gray-600 shadow-xl rounded-xl text-white 
     bg-primary flex justify-center items-center w-full  xl:max-w-[550px] order-last"
    >
      {showToast && <Toast onClose={() => setShowToast(false)} />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full font-fontRaleway flex flex-col items-center justify-center space-y-0"
      >
        {formData.map((item) => (
          <React.Fragment key={item.id}>
            <div className="flex flex-col items-start w-[100%]">
              <label
                htmlFor={item.name}
                className="text-white font-medium ml-1 text-lg"
              >
                {item.placeholder}{" "}
                <span className="text-red-800 text-3xl">*</span>
              </label>
              <input
                {...register(item.name, {
                  required: item.required,
                })}
                type={item.type}
                className="w-[100%] py-2 pl-2 font-medium my-2 focus:text-zinc-800 text-zinc-800 outline-none bg-white border-2 rounded-xl border-zinc-800"
              />
            </div>
            {errors[item.name] && (
              <p className="text-red-900 font-medium self-start">{`${
                errors[item.name]?.message
              }`}</p>
            )}
          </React.Fragment>
        ))}

        {/* ====================== Select Option ====================== */}
        <div className="flex flex-col space-y-1 items-start w-[100%]">
          <label className="block text-white font-medium ml-1 text-lg">
            {t("option_label")} <span className="text-red-800 text-3xl">*</span>
          </label>
          <select
            {...register("select", { required: t("option_required") })}
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="w-full p-2 border font-medium border-primary bg-bgColor text-primary rounded"
          >
            <option value="">{t("option_placeholder")}</option>
            <option value="payment_issues">{t("option_1")}</option>
            <option value="subscription_problems">{t("option_2")}</option>
            <option value="technical_issues">{t("option_3")}</option>
            <option value="other">{t("option_4")}</option>
          </select>
          {errors.select && (
            <p className="text-red-900 font-medium self-start">{`${errors.select?.message}`}</p>
          )}
        </div>

        {/* ====================== Message Text Area ====================== */}
        <div className="flex flex-col space-y-2 items-start w-[100%]">
          <label
            htmlFor="message"
            className="text-white font-medium ml-1 text-lg"
          >
            {t("textArea")} <span className="text-red-800 text-3xl">*</span>
          </label>
          <textarea
            {...register("message", {
              required: t("textAreaRequired"),
              minLength: { value: 10, message: t("textAreaMin") },
            })}
            rows={4}
            className="w-[100%] py-2 pl-2 font-medium text-zinc-800 focus:text-zinc-800 outline-none bg-white border-2 rounded-xl border-zinc-800"
          />
        </div>
        {errors.message && (
          <p className="text-red-900 font-medium self-start">{`${errors.message?.message}`}</p>
        )}

        {/* ====================== Checkbox Agreement ====================== */}
        <div className="flex items-center self-start ml-1 py-5">
          <input
            type="checkbox"
            {...register("checkbox", {
              required: "You must agree to the Privacy Policy",
            })}
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="w-11 h-6 self-start lg:mb-5 accent-bgColor border-2 border-transparent rounded-md focus:cursor-pointer"
          />
          <p className="text-start ml-1">
            <span>{t("checkbox_label_part_1") || " "}</span>
            <Link
              target="_blank"
              href="/terms"
              className="underline hover:text-secondary transition duration-300"
            >
              {t("checkbox_link")}
            </Link>{" "}
            <span>{t("checkbox_label_part_2")}</span>
          </p>
        </div>
        {errors.checkbox && (
          <p className="text-red-900 font-medium self-start">{`${errors.checkbox?.message}`}</p>
        )}

        {/* ====================== Submit Button ====================== */}
        <Button
          disabled={isSubmitting}
          type="submit"
          className="bg-white text-black hover:bg-black hover:text-white rounded-lg ml-1 px-12 w-full disabled:bg-gray-500 text-lg py-6"
        >
          {t("button")}
        </Button>
      </form>
    </MotionDiv>
  );
}

export default Form;
