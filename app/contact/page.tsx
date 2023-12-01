"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import * as yup from "yup";
import { basic } from "../data/ProductsDataSk";
import { useRouter } from "next/navigation";

const Page = () => {
  const phoneRegExp = /^[+]?[0-9 ]+$/;
  const schema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters long")
      .max(15, "Name must be at most 15 characters long"),
    email: yup.string().email("Invalid email").required("Email is required"),
    number: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Phone number is required"),
    isFavorite: yup.boolean().notRequired(),
    service: yup.string().notRequired(),
    message: yup.string().notRequired(),
  });

  const [isLoading, setIsLoading] = useState(false);

  type FormData = yup.InferType<typeof schema>;
  const navigate = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    let added_images = [];
    if (isChecked) {
      added_images = JSON.parse(localStorage.getItem("favoriteImages") || "[]");
    } else {
      added_images = []; // or an empty array [] depending on your requirement
    }

    try {
      const response = await fetch(
        process.env.BACKEND_API!, // <-- Comma was missing here
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            number: data.number,
            images: added_images,
            service: data.service,
            message: data.message,
          }),
        }
      );

      if (response.ok) {
        reset();
        navigate.push("/thanks");
        console.log("Email sent successfully!");
        setIsLoading(false);
      } else {
        console.error("Failed to send email");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setIsLoading(false);
    }
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setIsChecked(checked);
  };

  function changeColor(): void {
    const selectElement = document.getElementById(
      "service"
    ) as HTMLSelectElement;
    if (selectElement.selectedIndex !== 0) {
      selectElement.classList.add("selected");
    } else {
      selectElement.classList.remove("selected");
    }
  }

  return (
    <>
      <div className="template">
        <div className="fixed_height" />
        <div className="inside">
          <h1>Kontakt</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              id="name"
              placeholder={basic[0].contact_name}
              {...register("name")}
            />
            {errors.name && (
              <p className="error_message">{errors.name.message}</p>
            )}
            <div className="input_both">
              <div className="input_vertically">
                <input
                  type="email"
                  id="email"
                  placeholder="*EMAIL"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="error_message">{errors.email.message}</p>
                )}
              </div>
              <div className="input_vertically">
                <input
                  type="text"
                  id="number"
                  placeholder="*ČÍSLO"
                  {...register("number")}
                />
                {errors.number && (
                  <p className="error_message">{errors.number.message}</p>
                )}
              </div>
            </div>
            <div className="input_both2">
              <div className="custom-checkbox">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  {...register("isFavorite")}
                  onChange={handleChange}
                />

                <label htmlFor="myCheckbox"></label>
                {isChecked ? (
                  <h3 className="opacity1">{basic[0].contact_add_list}</h3>
                ) : (
                  <h3>{basic[0].contact_add_list}</h3>
                )}
              </div>
              <div className="input_vertically">
                <select
                  id="service"
                  {...register("service")}
                  onChange={changeColor}
                >
                  <option value="">{basic[0].contact_choose_service}</option>
                  <option value="option2">Kompletná realizácia</option>
                  <option value="option3">Návrhy designu</option>
                  <option value="option4">Odborné poradenstvo</option>
                  <option value="option4">Dlažby</option>
                  <option value="option4">Obklady</option>
                  <option value="option4">Pracovné dosky</option>
                  <option value="option4">Servis</option>
                </select>
                {errors.service && (
                  <p className="error_message">{errors.service.message}</p>
                )}
              </div>
            </div>
            <textarea
              id="message"
              placeholder={basic[0].contact_message}
              rows={4}
              cols={40}
              {...register("message")}
            />
            <button
              className="btn btn--primary margin_bottom_5 min_width130"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <ClipLoader size={20} color={"#ffffff"} loading={isLoading} />
              ) : (
                "Odoslať"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
