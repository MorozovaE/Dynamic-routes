import React from "react";
import { ICustomPage } from "../../interfaces";
import { Helmet } from "react-helmet";

interface ICustomPageProps {
  data: ICustomPage;
}

export const CustomPage = ({ data }: ICustomPageProps) => {
  return (
    <div style={{ backgroundColor: data.backgroundColor }}>
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
