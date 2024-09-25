import React from "react";

interface JobDescription {
  title: string;
  creativity: number;
  match: (param) => boolean;
}
interface FrontendDeveloper {
  title: string;
  creativity: number;
  experience: number;
}

export default function borrar(jd: JobDescription, fd: FrontendDeveloper) {
  const searchDeveloper = (jd: JobDescription, myProfile: FrontendDeveloper): string => {
    if (jd.match(myProfile.experience)) return "hire this developer";
    else if (myProfile.creativity > jd.creativity) return "hire now this developer!";
    else return "let`s talk 📞";
  };

  searchDeveloper();

  return <div>borrar</div>;
}
