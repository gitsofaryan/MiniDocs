import React, {useRef, useState} from "react";
import Card from "./Card";

function Foreground() {
  // const data = [
  //     icon,,desc,filesize,closeOrDownload,tagOpened,
  // ]

const ref = useRef(null);

  const data = [
    {
      desc: "hiii.",
      filesize: ".9MB",
      close:true,
      tag:{isOpen:true, tagTitle:"Download Now", tagColor:"blue"},

    },
    {
      desc: "hiii.",
      filesize: ".9MB",
      close:true,
      tag:{isOpen:true, tagTitle:"Download Now", tagColor:"green"},

    },{
      desc: "hiii.",
      filesize: ".9MB",
      close:true,
      tag:{isOpen:true, tagTitle:"Download Now", tagColor:"blue"},

    },{
      desc: "hiii.",
      filesize: ".9MB",
      close:true,
      tag:{isOpen:true, tagTitle:"Download Now", tagColor:"green"},

    },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
    
    {data.map((item, index) => (
        <Card data={item} reference={ref} />
    ))}
    </div>

  );
}

export default Foreground;
