import React from "react";

function Content({ content }: any) {
  return <div dangerouslySetInnerHTML={{ __html: `<div>${content}</div>` }} />;
}

export default Content;
