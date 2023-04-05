import React from "react";
import "../../styles/PageTitle.scss"


interface Props {
  title: string;
}

const PageTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="pageTitle">
      <h2>{title}</h2>
    </div>
  );
};

export default PageTitle;
