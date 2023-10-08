import { useForm, SubmitHandler } from "react-hook-form";
import { ICustomPage } from "../../interfaces";
import { useAppDispatch } from "../../store/store";
import { addPage } from "../../store/features/pagesSlice";
import { ColorPicker } from "../ColorPicker/ColorPicker";
import { useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import styles from "./pageForm.module.scss";

export const PageForm = () => {
  const [color, setColor] = useState("#fff");
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICustomPage>();

  const onSubmit: SubmitHandler<ICustomPage> = (data) => {
    data.backgroundColor = color;
    dispatch(addPage(data));
    reset();
  };

  return (
    <form className={styles.pageForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.fieldsContainer}>
        <div>
          <span>Path:</span>
          <input
            {...register("path", {
              pattern: /\/?[A-Za-z0-9_.\-~]+(\/?[A-Za-z0-9_.\-~]+)*\/?/,
              minLength: {
                value: 2,
                message: "Not enought characters, min 2",
              },
              max: 120,
              required: "Path is required",
            })}
          />
          <ErrorMessage
            errors={errors}
            name="path"
            render={({ message }: any) => <span>{message}</span>}
          />
        </div>

        <div>
          <span>Meta Title:</span>
          <input
            {...register("metaTitle", {
              minLength: {
                value: 2,
                message: "Not enought characters, min 2",
              },
              max: 60,
              required: "Meta Title is required",
            })}
          />
          <ErrorMessage
            errors={errors}
            name="metaTitle"
            render={({ message }: any) => <span>{message}</span>}
          />
        </div>

        <div>
          <span>Meta Description</span>
          <input
            {...register("metaDescription", {
              max: 155,
              required: "Meta Description is required",
            })}
          />
          <ErrorMessage
            errors={errors}
            name="metaDescription"
            render={({ message }: any) => <span>{message}</span>}
          />
        </div>

        <div>
          <span>h1:</span>
          <input {...register("h1", { required: "h1 is required" })} />
          <ErrorMessage
            errors={errors}
            name="h1"
            render={({ message }: any) => <span>{message}</span>}
          />
        </div>
        <div>
          <span>Text:</span>
          <input {...register("text", { required: "Text is required" })} />
          <ErrorMessage
            errors={errors}
            name="text"
            render={({ message }: any) => <span>{message}</span>}
          />
        </div>
        <input  type="submit" value="Create" />
      </div>

      <div className={styles.backgroundContainer}>
        <span>Background Color:</span>
        <ColorPicker
          color={color}
          onChangeColor={setColor}
          defaultValue={color}
        />
      </div>
    </form>
  );
};
