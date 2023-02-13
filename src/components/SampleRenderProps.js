import React from "react";
import RenderPropsComponent from "./RenderPropsComponent";
import { useCookies } from "react-cookie";

const SampleRenderProps = () => {
  const [cookies, setCookies, removeCookie] = useCookies(["name"]);
  console.log(cookies);
  return (
    <RenderPropsComponent
      render={() => {
        return (
          <div>
            <h2 onClick={(e) => setCookies("age", 22)}>
              This is from render props
            </h2>
          </div>
        );
      }}
    />
  );
};
export default SampleRenderProps;
