import React, { useContext } from "react";
import styles from "./index.module.scss";
import discountFormBackImg from "../../assets/discountFormBackbround.png";
import { themeContext } from "../../context/theme";
import cn from "classnames";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants";
//import { PHONE_REGEX } from "../../constants";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { sendSaleData } from "../../store/async-actions";
import { getDiscountStatus } from "../../store/selectors";

export const DiscountForm = () => {
  const dispatch = useDispatch();
  const { theme } = useContext(themeContext);

  const { register, handleSubmit, formState, getValues } = useForm();

  const onFormSubmit = (formData) => {
    //dispatch(sendSaleData(formData))
    console.log(formData);
  };

  return (
    <div
      className={cn(styles.discountFormWrapper, {
        [styles.dark]: theme === "dark",
      })}
    >
      <div className={styles.discountForm}>
        <div className={styles.discountFormText}>5% off on the first order</div>
        <div className={styles.discountFormInfoWrapper}>
          <div
            className={styles.discountFormBackImg}
            style={{ backgroundImage: `url(${discountFormBackImg})` }}
          ></div>
          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className={styles.discountFormInform}
          >
            <input
              type="text"
              placeholder="Name"
              className={styles.discountFormInputs}
              {...register("userName", { required: true })}
            ></input>
            <input
              type="number"
              placeholder="Phone number"
              className={styles.discountFormInputs}
              {...register("userPhone", { required: true})}
            ></input>
            <input
              type="email"
              placeholder="Email"
              className={styles.discountFormInputs}
              {...register("userEmail", { required: true })}
            ></input>
            <button type="submit" className={styles.discountFormButton}>
              Get a discount
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
