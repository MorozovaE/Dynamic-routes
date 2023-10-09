import React from "react";
import { ICustomPage } from "../../interfaces";
import { Helmet } from "react-helmet";
import style from "./customPage.module.scss";

interface ICustomPageProps {
  data: ICustomPage;
}

export const CustomPage = ({ data }: ICustomPageProps) => {
  return (
    <div
      style={{ backgroundColor: data.backgroundColor }}
      className={style.customPageContainer}
    >
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="title" content={data.metaTitle} />
        <meta name="description" content={data.metaDescription} />
      </Helmet>
      <h1>{data.h1}</h1>
      <p>{data.text}</p>
    </div>
  );
};
